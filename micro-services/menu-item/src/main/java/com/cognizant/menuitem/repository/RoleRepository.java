package com.cognizant.menuitem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.menuitem.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{

	Role findById(int id);
}
