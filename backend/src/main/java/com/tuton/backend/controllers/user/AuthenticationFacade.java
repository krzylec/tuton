package com.tuton.backend.controllers.user;

import org.springframework.stereotype.Component;

import com.tuton.backend.dto.UserDto;
import com.tuton.backend.mappers.UserMapper;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class AuthenticationFacade {
    private final AuthenticationService service;

    public void login(UserDto userDto) {
        service.login(UserMapper.toEntity(userDto));
    }

    public UserDto register(UserDto userDto) {
        return UserMapper.register_toDto(service.register(UserMapper.toEntity(userDto)));
    }

}
