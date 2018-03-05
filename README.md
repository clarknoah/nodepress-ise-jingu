# Nodepress Ise Jingu

# Express Ise Jingu Workflow

1. Install express
> `npm install --save express`
2. Create app.js file
> `touch app.js`
3.

# Outline

1. Express
  1. Main Functions
    1. `app.set`
    2. `app.VERB`
    3. `app.engine`
    4. `app.status`
    5. `app.render()`
  2. Request object
    1. `req.query`
    1. `req.params`
    2. `req.param('key')`
    4. `req.body`
    5. `req.headers`
    6. `req.ip`
    7. `req.path`
    8. `req.protocol`
    9. `req.secure`
    10. `req.acceptedLanguages`
  3. Response Object
    1. `res.status`
    2. `res.redirect`
    3. `res.send(body)`
    4. `res.json(json)`
    5. `res.type('contentType')`
    6. `res.attachment([filename]). or res.download`
    7. `res.render()`
  4. Session Variables
    1. Cookies
    2. Sign Cookies
    3. session
  5. Middleware
    1. body-parser
    2. Cross-site forgery protection
  6. Routing
    1. Subdomains with vHost
    2. Metacharacters in the route
      1. `+`
      2. `?`
      3. `*`
      4. `()`
        1. Parenethese can be used to store optional word matches such as /pathto(home)?, will respond
  7. Security
    1. Self Generated Certificates
    2. Third Party Authentication (Facebook, Google)
2. Testing
  1. Cross Page Testing
  2. Unit Testing
  3.

# What I want to practice on

0. Initial Configuration
  1. Setup Ports
2. Static File Serving
  1. serve index.html
  2. serve 404.html
  3. serve 500.html
1. Use all of the app.VERB commands (three endpoints per verb)
  1. get
  2. post
  3. put
  4. patch
  5. delete
2. Setting the port that the server will use
3. Request Object Anatomy
  1. Log the params
  2. Log the body
  3. Log headers
  4. Log IP
  5. Log path
  8. log protocol
  9. log secure status
  10. log languages
  11. Return all this information as a JSON object to the client
4. Response Object Anatomy
  1. log res.status
  2. Response with redirect (Separate)
  3. Response with an attachement (Seperate)
5. Store Session Cookie
  1. Provide session cookie
  2. Provide signed cookie
  2. Retreive sessio cookie
6. Setup Middleware
  1. Cross-site Forgery middleware
  2. Connect Middleware
7. Routing
  1. Route that uses `+`
  2. Route that uses `?`
  3. Route that uses `*`
  4. Route that uses `()`
  5. Route the accepts a querystring and returns that value
  6. Route that accepts two query strings and returns them
8. HTTP Status codes
  1. 200 Success
  2. 201 Created
  3. 202 Accepted
  4. 204 Non Content
  5. 400 Bad Request
  6. 401 Unauthorized
  7. 403 Forbidden
  8. 404 Not Found
  9. 408 Request Timeout
  10. 413 Payload Too Large
  11. 500 Internal Server Error
9. HTTPS
  1. Establish a self generated cert for HTTPS
