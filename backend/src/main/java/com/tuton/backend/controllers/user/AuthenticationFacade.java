package com.tuton.backend.controllers.user;

import java.util.List;

import org.springframework.stereotype.Component;

import com.tuton.backend.dto.RoleDto;
import com.tuton.backend.dto.UserDto;
import com.tuton.backend.mappers.RoleMapper;
import com.tuton.backend.mappers.UserMapper;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class AuthenticationFacade {
    private final AuthenticationService service;

    public List<RoleDto> login(UserDto userDto) {
        return new RoleMapper().toDto(service.login(UserMapper.toEntity(userDto)));
    }

    public UserDto register(UserDto userDto) {
        return UserMapper.register_toDto(service.register(UserMapper.toEntity(userDto)));
    }

}
