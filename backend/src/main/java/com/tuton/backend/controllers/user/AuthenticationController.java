package com.tuton.backend.controllers.user;

import org.springframework.web.bind.annotation.RestController;

import com.tuton.backend.dto.RoleDto;
import com.tuton.backend.dto.UserDto;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationFacade facade;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public List<RoleDto> login(@RequestBody UserDto userDto) {
        return facade.login(userDto);
    }

    @PostMapping("/register")
    public UserDto register(@RequestBody UserDto userDto) {
        return facade.register(userDto);
    }
}
