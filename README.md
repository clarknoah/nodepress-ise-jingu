# Nodepress Ise Jingu

# Express Ise Jingu Workflow

1. Install express
> `npm install --save express nodemon`
2. Edit package.json file to run nodemon app.js
> `"start":"nodemon app.js"`
2. Create app.js file
> `touch app.js`
3. Create Route Directory
> `mkdir routes`
3. Create public folder
> `mkdir public`
4. Create `index.html` file in public folder and fill out a basic HTML scaffold
3. **Initial Configuration of app.js**
4. Import express
```javascript
const express = require('express');
```
5. Import bodyparser
```javascript
var bodyParser = require('body-parser');
```
6. Create `app` variable from express
```javascript
const app = express();
```
7. Configure static route
```javascript
app.use(express.static(__dirname+'/public'));
```
8. Setup body and URL encoding
```javascript
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```
8. Create port listener in app.js
```javascript
app.listen(3000, () => console.log('Example app listening on port 3000!'));
```
10. create `index.js` in routes
11. create `cookie, http-status, meta, query, req, res, static, and verb.js in routes`
12. Create import router from express.Router() for all files
13. In index.js use router.use to define the routes
```javascript
router.use('/route', require('./route.js'));
```
14.Begin creating verb routes
15. `Get Post`
16. Create Get Route that returns a string informing the user that post has been made
17. `Post Request`
18. Provide html form in `index.js` which posts a field named `post_key` to server, and respond with the value of the key
19. `Req Object Route`
20. `req.params`
21. Create a route within `req.js` which uses the route `/params/:key`
22. Create an anchor on `index.html` which calls to `/req/params/value`
23. `req.body`
24. Create a POST method in `req.js` which logs the `req.body` value, and returns the body to the client
25. Create a form on `index.js` which posts several inputs to `/req/body`
26. `req.headers`
27.  Add anchor in `index.js` and add get route for `/req/ip` in `req.js`, log `req.ip`
28. `req.path`
29. Add anchor in `index.js` with `req/path`, and at get request within `req.js`, log path and return path to client
30. `req.protocol`
31. Add anchor in `index.js` with `/req/protocol`, create get route in `req.js` with log of `req.protocol`
32. `req.secure`
33. Add anchor in `index.js` with `/req/secure-status`, create get route in `req.js` with log of `req.secure`
34. `req.acceptedLanguages`
35. Add anchor in `index.js` with `/req/languages`, create get route in `req.js` with log of `req.acceptedLanguages`


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
  1. get X
  2. post X
2. Setting the port that the server will use X
3. Request Object Anatomy
  1. Log the params X
  2. Log the body X
  3. Log headers X
  4. Log IP X
  5. Log path X
  8. log protocol X
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

  # Routes

1. `/static` Will house all my static file routes, read a file from filesystem
2. `/verb/` Will house all my HTTP commands
3. `/req/` Will house my listeners for different req values
4. `/res/` Willl house the values for responses
5. `/cookie/` will show how my cookies are setup
6. `/meta/` will house my routes that require Metacharacters
7. `/query/` Will house my one and two query strings,
8. `/http-status/` will house my http status codes
