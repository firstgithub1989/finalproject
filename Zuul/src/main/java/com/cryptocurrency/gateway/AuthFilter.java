package com.cryptocurrency.gateway;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class AuthFilter extends ZuulFilter {

    @Autowired
    private DataSource dataSource;

    @Override
    public String filterType() {
        return "pre";
    }

    @Override
    public int filterOrder() {
        return 0;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public Object run() {
        HttpServletRequest request = RequestContext.getCurrentContext().getRequest();
        HttpServletResponse response = RequestContext.getCurrentContext().getResponse();
        request.getServletContext().getFilterRegistrations();
        RequestContext ctx = RequestContext.getCurrentContext();
//        ctx.addZuulRequestHeader("user", request.getUserPrincipal().getName());
//        response.addHeader("user",request.getUserPrincipal().getName());
//        response.setHeader("user",request.getUserPrincipal().getName());
//
//        try(PreparedStatement ps = dataSource.getConnection().prepareStatement("select user_id from users where user_name="
//                + "\"" + request.getUserPrincipal().getName() + "\""))
//        {
//            try(ResultSet rs = ps.executeQuery()) {
//                rs.next();
//                Integer i = rs.getInt(1);
//                ctx.addZuulRequestHeader("userid", Integer.toString(i));
//                response.addHeader("userid",Integer.toString(i));
//                response.setHeader("userid",Integer.toString(i));
//            }
//
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
        return response;
    }
}
