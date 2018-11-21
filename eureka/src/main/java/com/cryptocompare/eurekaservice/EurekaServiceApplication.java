package com.cryptocompare.eurekaservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class EurekaServiceApplication {

	public static void main(String[] args) {
//		System.setProperty("eureka.client.registerWithEureka", "false");
//		System.setProperty("eureka.client.fetchRegistry", "false");
//		System.setProperty("eureka.client.serviceUrl.defaultZone", "https://eureka.apps.internal:8080/eureka/");
//		System.setProperty("eureka.client.instance.hostname", "localhost");
		SpringApplication.run(EurekaServiceApplication.class, args);
		//printWords();
	}




}


//@Configuration
//@EnableWebSecurity
/*
@ComponentScan(basePackageClasses = KeycloakSecurityComponents.class)
class SecurityConfig extends KeycloakWebSecurityConfigurerAdapter
{
	*/
/**
	 * Registers the KeycloakAuthenticationProvider with the authentication manager.
	 *//*

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		KeycloakAuthenticationProvider keycloakAuthenticationProvider = keycloakAuthenticationProvider();
		keycloakAuthenticationProvider.setGrantedAuthoritiesMapper(new SimpleAuthorityMapper());
		auth.authenticationProvider(keycloakAuthenticationProvider);
	}
	@Bean
	public KeycloakConfigResolver KeycloakConfigResolver() {
		return new KeycloakSpringBootConfigResolver();
	}
	*/
/**
	 * Defines the session authentication strategy.
	 *//*

	@Bean
	@Override
	protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
		return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		super.configure(http);
		http
				.authorizeRequests()
				//.antMatchers("/buy-service/**").hasRole("user")
				.anyRequest().permitAll();
	}
}
*/
