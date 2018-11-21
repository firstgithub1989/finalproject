package com.cryptocurrency.gateway.dao;

import com.cryptocurrency.gateway.bo.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Component
@Transactional
@Repository
public interface RolesDao  extends CrudRepository<Role, Long> {

}
