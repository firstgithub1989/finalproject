package com.cryptocurrency.gateway;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component
public class AuthEntryP extends BasicAuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
                         AuthenticationException e) throws IOException, ServletException {



        httpServletResponse.setStatus(HttpServletResponse.SC_NO_CONTENT);
        httpServletResponse.addHeader("WWW-Authenticate", "Basic realm=" + "DeveloperStack" + "");

        PrintWriter writer = httpServletResponse.getWriter();
        writer.println("HTTP Status 401 - " + e.getMessage());

        ((HttpServletResponse) httpServletResponse).addHeader("Access-Control-Allow-Origin", "http://ec2-13-233-23-145.ap-south-1.compute.amazonaws.com:8080");
        ((HttpServletResponse) httpServletResponse).addHeader("Access-Control-Allow-Credentials", "true");
        ((HttpServletResponse) httpServletResponse).addHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST");
        ((HttpServletResponse) httpServletResponse).addHeader("Access-Control-Allow-Headers", "X-CustomHeader, Content-Type, Cache-Control, Authorization, X-Requested-With, DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range");

        //System.out.println("User:"  + request.getUserPrincipal().getName());
        // For HTTP OPTIONS verb/method reply with ACCEPTED status code -- per CORS handshake
        if (httpServletRequest.getMethod().equals("OPTIONS")) {
            httpServletResponse.setStatus(HttpServletResponse.SC_NO_CONTENT);
            return;
        }
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        setRealmName("DeveloperStack");
        super.afterPropertiesSet();
    }
}
