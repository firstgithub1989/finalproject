package com.cryptocurrency.frontend.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    /*@Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/login").setViewName("login");
        registry.addViewController("/").setViewName("index");
    }*/
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        //registry.addViewController("/index.html").setViewName("index");

        registry.addViewController("/error").setViewName("forward:/index.html");
    }


//    @Bean
//    public EmbeddedServletContainerCustomizer containerCustomizer() {
//        return container -> {
//            container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND,
//                    "/notFound"));
//        };
//    }
}
