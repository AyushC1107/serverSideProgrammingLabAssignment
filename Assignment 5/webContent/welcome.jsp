<!-- File: welcome.jsp -->

<%@ page session="true" %>
<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h1>Welcome, <%= session.getAttribute("username") %>!</h1>
    <a href="session">Go to Session Page</a>
</body>
</html>
