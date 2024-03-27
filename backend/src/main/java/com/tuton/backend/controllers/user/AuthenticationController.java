package com.tuton.backend.controllers.user;

import org.springframework.web.bind.annotation.RestController;

import com.tuton.backend.dto.UserDto;
import com.tuton.backend.model.Role;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationFacade facade;

    @PostMapping("/login")
    public List<Role> login(@RequestBody UserDto userDto) {
        facade.login(userDto);
        return ((MyUserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getRoles();
    }

    @PostMapping("/register")
    public UserDto register(@RequestBody UserDto userDto) {
        return facade.register(userDto);
    }
}
