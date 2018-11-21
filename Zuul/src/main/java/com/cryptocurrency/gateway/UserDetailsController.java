package com.cryptocurrency.gateway;

import com.cryptocurrency.gateway.bo.UserDetails;
import com.cryptocurrency.gateway.AuthFilter;
import com.cryptocurrency.gateway.web.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

//@RestController
public class UserDetailsController{


    @Bean
    AuthFilter authFilter() {
        return new AuthFilter();
    }

    @Autowired
    private UserDetailsService userDetailsService;


    @GetMapping(value="/login")
    public ResponseEntity<String> login(Principal principal, HttpServletRequest httpServletRequest) {

        httpServletRequest.getHeader("userid");
        return new ResponseEntity<String>(httpServletRequest.getHeader("userid"), HttpStatus.OK);
    }

    @PostMapping(value="/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> register(@RequestBody UserDetails userDetails) {
       // userDetailsService.saveUser(userDetails);
        return new ResponseEntity<String>("Registration Successful", HttpStatus.OK);
    }

    @RequestMapping("/error")
    public String handleError() {
        //do something like logging
        return "error";
    }

    // @Override
    public String getErrorPath() {
        return "/index.html";
    }
}
