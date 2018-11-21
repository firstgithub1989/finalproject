package com.cryptocurrency.gateway;

import com.cryptocurrency.gateway.bo.UserDetails;
import com.cryptocurrency.gateway.web.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.sql.SQLException;

//@EnableOAuth2Sso

//@EnableRedisHttpSession(redisFlushMode = RedisFlushMode.IMMEDIATE)
@EnableZuulProxy
@SpringBootApplication
@RestController
@EnableEurekaClient
public class GatewayServer {


    @Bean
    AuthFilter authFilter() {
        return new AuthFilter();
    }

    @Autowired
    private UserDetailsService userDetailsService;

    public static void main(String[] args) {
        SpringApplication.run(GatewayServer.class, args);
    }

    @GetMapping(value="/login")
    public ResponseEntity<String> login(Principal principal, HttpServletRequest httpServletRequest) {

        long userId = userDetailsService.findUserID(principal.getName());
        return new ResponseEntity<String>(Long.toString(userId), HttpStatus.OK);
    }

    @PostMapping(value="/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> register(@RequestBody UserDetails userDetails) {
        try {
            userDetailsService.saveUser(userDetails);
        } catch (Exception e) {
            return new ResponseEntity<String>("USER NAME NOT AVAILABLE", HttpStatus.IM_USED);
        }
        return new ResponseEntity<String>("REGISTRATION SUCCESSFUL", HttpStatus.OK);
    }

    @GetMapping(value="/profile/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDetails> userDetails(@PathVariable("userId") long userId) {

        UserDetails userDetails = userDetailsService.findUser(userId);
        return new ResponseEntity<UserDetails>(userDetails, HttpStatus.OK);
    }

    //@Override
    public String getErrorPath() {
        return "/index.html";
    }
}

