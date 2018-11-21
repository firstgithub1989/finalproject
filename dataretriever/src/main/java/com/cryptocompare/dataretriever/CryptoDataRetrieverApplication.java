package com.cryptocompare.dataretriever;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
//import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

///@EnableResourceServer
//@EnableRedisHttpSession(redisFlushMode = RedisFlushMode.IMMEDIATE)
@EnableEurekaClient
@SpringBootApplication
@EnableScheduling
public class CryptoDataRetrieverApplication {
    public static void main(String[] args) {
	SpringApplication.run(CryptoDataRetrieverApplication.class, args);
    }


}
