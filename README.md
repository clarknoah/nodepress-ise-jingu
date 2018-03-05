# Nodepress Ise Jingu

# Express Ise Jingu Workflow

1.

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
