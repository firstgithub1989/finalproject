package com.cryptocurrency.payment.web.config;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//@Component
public class CORSFiler implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        System.out.println("CORSFilter HTTP Request: " + request.getMethod());

        // Authorize (allow) all domains to consume the content
//        ((HttpServletResponse) servletResponse).addHeader("Access-Control-Allow-Credentials", "true");
//        ((HttpServletResponse) servletResponse).addHeader("Access-Control-Allow-Origin", "http://localhost:4200");
//        ((HttpServletResponse) servletResponse).addHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST");
//        ((HttpServletResponse) servletResponse).addHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Cache-Control, Authorization, X-Requested-With");
//
//        HttpServletResponse resp = (HttpServletResponse) servletResponse;
//
//        // For HTTP OPTIONS verb/method reply with ACCEPTED status code -- per CORS handshake
//        if (request.getMethod().equals("OPTIONS")) {
//            resp.setStatus(HttpServletResponse.SC_ACCEPTED);
//            return;
//        }

        // pass the request along the filter chain
        chain.doFilter(request, servletResponse);
    }

    @Override
    public void destroy() {

    }
}
