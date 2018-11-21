package com.cryptocurrency.gateway.dao;

import com.cryptocurrency.gateway.bo.UserDetails;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
@Component
public interface UserDetailsDao extends CrudRepository<UserDetails, Long> {
    public UserDetails findByUserName(String userName);
}
