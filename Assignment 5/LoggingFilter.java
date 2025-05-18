// File: LoggingFilter.java

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.*;

@WebFilter("/*")
public class LoggingFilter implements Filter {
    public void init(FilterConfig fConfig) throws ServletException {}

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String ipAddress = httpRequest.getRemoteAddr();
        String requestURL = httpRequest.getRequestURL().toString();

        System.out.println("IP Address: " + ipAddress + ", Requested URL: " + requestURL);
        chain.doFilter(request, response);
    }

    public void destroy() {}
}
