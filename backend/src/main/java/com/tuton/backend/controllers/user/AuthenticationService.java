package com.tuton.backend.controllers.user;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.tuton.backend.model.Role;
import com.tuton.backend.model.User;
import com.tuton.backend.model.Role.UserRoles;
import com.tuton.backend.repositories.RoleRepository;
import com.tuton.backend.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements UserDetailsService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public List<Role> login(User user) {
        // user to check password against and if exists
        User checkUser = userRepository.findById(user.getUsername()).orElseThrow();
        if (passwordEncoder.matches(user.getPassword(), checkUser.getPassword())) {
            // sets up SecurityContext and return loggedin user roles
            SecurityContextHolder.getContext()
                    .setAuthentication(new TokenAuthentication(new MyUserPrincipal(checkUser.getUsername(),
                            checkUser.getPassword(), checkUser.getRoles())));
            return ((MyUserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getRoles();
        } else {
            // credentialns didnt match
            throw new UsernameNotFoundException("could not login");
        }
    }

    public ResponseEntity<String> register(User user) {
        // hash password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        if (userRepository.existsById(user.getUsername())) {
            // username taken
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already registered");
        } else {
            // register user
            // assign USER role
            user.setRoles(roleRepository.findByRoleName(UserRoles.USER));
            userRepository.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered");
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findById(username).orElseThrow(() -> new UsernameNotFoundException(username));
        return MyUserPrincipal.builder()
                .username(username)
                .password(user.getPassword())
                .roles(user.getRoles())
                .build();
    }
}
