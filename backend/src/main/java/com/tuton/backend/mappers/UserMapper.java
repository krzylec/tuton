package com.tuton.backend.mappers;

import com.tuton.backend.dto.UserDto;
import com.tuton.backend.model.User;

public class UserMapper {

    public static User toEntity(UserDto dto) {
        return User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .build();
    }

    public static UserDto register_toDto(User entity) {
        return UserDto.builder()
                .username(entity.getUsername())
                .build();
    }
}
