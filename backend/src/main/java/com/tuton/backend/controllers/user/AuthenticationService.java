package com.tuton.backend.controllers.user;

import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.tuton.backend.model.Role;
import com.tuton.backend.model.User;
import com.tuton.backend.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;

    public List<Role> login(User user) {
        User checkUser = repository.findById(user.getUsername()).orElseThrow();
        if (checkUser.getPassword().equals(user.getPassword())) {
            SecurityContextHolder.getContext()
                    .setAuthentication(new TokenAuthentication(new MyUserPrincipal(checkUser.getUsername(),
                            checkUser.getPassword(), checkUser.getRoles())));
            return ((MyUserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getRoles();
        } else {
            return null;
        }
    }

    public User register(User user) {
        return user;
    }
}
