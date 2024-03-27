package com.tuton.backend.controllers.user;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.tuton.backend.exceptions.custom.IDNotFoundException;
import com.tuton.backend.model.User;
import com.tuton.backend.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;

    public void login(User user) {
        User checkUser = repository.findById(user.getUsername()).orElseThrow();
        if (checkUser.getPassword().equals(user.getPassword())) {
            SecurityContextHolder.getContext()
                    .setAuthentication(new TokenAuthentication(new MyUserPrincipal(checkUser.getUsername(),
                            checkUser.getPassword(), checkUser.getRoles())));
        } else {
            throw new IDNotFoundException("Lesson with given ID does not exists");
        }
    }

    public User register(User user) {
        return user;
    }
}
