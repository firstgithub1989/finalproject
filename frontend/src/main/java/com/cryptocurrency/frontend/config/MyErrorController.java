package com.cryptocurrency.frontend.config;


import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class MyErrorController implements ErrorController{

    @RequestMapping("/error")
    void handleFoo(HttpServletResponse response) throws IOException {
        response.sendRedirect("index.html");
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}
