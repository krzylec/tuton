package com.tuton.backend.controllers.user;

import org.springframework.web.bind.annotation.RestController;

import com.tuton.backend.dto.UserDto;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationFacade facade;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto userDto) {
        return facade.login(userDto);
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        // Implement logout functionality (e.g., invalidate token)
        return ResponseEntity.ok().build();
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto userDto) {
        return facade.register(userDto);
    }
}
