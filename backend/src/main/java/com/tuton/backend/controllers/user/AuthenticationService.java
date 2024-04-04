package com.tuton.backend.controllers.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.tuton.backend.model.Role;
import com.tuton.backend.model.User;
import com.tuton.backend.model.Role.UserRoles;
import com.tuton.backend.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final BCryptPasswordEncoder passwordEncoder;

    public List<Role> login(User user) {
        // user to check password against and if exists
        User checkUser = repository.findById(user.getUsername()).orElseThrow();
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

        if (repository.existsById(user.getUsername())) {
            // username taken
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already registered");
        } else {
            // register user
            // assign ROLE_USER role
            List<Role> roles = new ArrayList<>();
            roles.add(new Role(UserRoles.USER));
            repository.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered");
        }
    }
}
