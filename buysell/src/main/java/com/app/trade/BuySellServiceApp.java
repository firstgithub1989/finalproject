package com.app.trade;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
@EnableAutoConfiguration
//@EnableFeignClients
public class BuySellServiceApp {
	public static void main(String[] args) {
		SpringApplication.run(BuySellServiceApp.class, args);
	}
}

