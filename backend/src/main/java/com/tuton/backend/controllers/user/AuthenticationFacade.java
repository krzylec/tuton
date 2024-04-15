package com.tuton.backend.controllers.user;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.tuton.backend.dto.UserDto;
import com.tuton.backend.mappers.UserMapper;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class AuthenticationFacade {
    private final AuthenticationService service;

    public ResponseEntity<?> login(UserDto userDto) {
        return service.login(new JwtRequest(userDto.getUsername(), userDto.getPassword()));
    }

    public ResponseEntity<String> register(UserDto userDto) {
        return service.register(UserMapper.toEntity(userDto));
    }
}
