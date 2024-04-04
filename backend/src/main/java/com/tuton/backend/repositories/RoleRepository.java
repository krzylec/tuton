package com.tuton.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tuton.backend.model.Role;
import com.tuton.backend.model.Role.UserRoles;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    List<Role> findByRoleName(UserRoles roleName);
}
