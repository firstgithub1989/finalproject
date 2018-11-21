package com.cryptocurrency.gateway.web.service;

import com.cryptocurrency.gateway.bo.Role;
import com.cryptocurrency.gateway.bo.UserDetails;
import com.cryptocurrency.gateway.dao.RolesDao;
import com.cryptocurrency.gateway.dao.UserDetailsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.SQLException;

@Service
public class UserDetailsService {

    @Autowired
    private UserDetailsDao userDetailsDao;

    @Autowired
    private RolesDao rolesDao;

    public UserDetails findUser(long userId) {
        return userDetailsDao.findOne(userId);
    }

    @Transactional
    public void saveUser(UserDetails userDetails) throws SQLException{
        rolesDao.save(new Role(userDetails.getUserName(), "USER"));
        userDetailsDao.save(userDetails);
    }

    public long findUserID(String userName) {
        UserDetails userDetails = userDetailsDao.findByUserName(userName);
        return userDetails.getUserId();
    }
}
