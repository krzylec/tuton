package com.tuton.backend.mappers;

import java.util.List;

import com.tuton.backend.dto.RoleDto;
import com.tuton.backend.model.Role;

public class RoleMapper implements Mapper<Role, RoleDto> {

    @Override
    public Role toEntity(RoleDto dto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'toEntity'");
    }

    @Override
    public RoleDto toDto(Role entity) {
        return RoleDto.builder()
                .roleName(entity.getAuthority())
                .build();
    }

    @Override
    public List<Role> toEntity(List<RoleDto> dtos) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'toEntity'");
    }

    @Override
    public List<RoleDto> toDto(List<Role> entitys) {
        return entitys.stream()
                .map(this::toDto)
                .toList();
    }
}
