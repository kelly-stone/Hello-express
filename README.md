# Nodejs-Express:woman_technologist:

**API reference:**

http://expressjs.com/en/4x/api.html

**guide for Routing:**

http://expressjs.com/en/guide/routing.html

## Upload file (multer)::v::shamrock:

**Useful links:**

-https://www.npmjs.com/package/multer

-https://www.cnblogs.com/chyingp/p/express-multer-file-upload.html

-https://github.com/richardgirges/express-fileupload

** View [ejs](https://ejs.co/):** Some popular template engines that work with Express are Pug, Mustache, and EJS. The Express application generator uses Jade as its default, but it also supports several others.

```
let ejs = require('ejs'),
    users = ['geddy', 'neil', 'alex'];

// Just one template
ejs.render('<?= users.join(" | "); ?>', {users: users}, {delimiter: '?'});
// => 'geddy | neil | alex'

// Or globally
ejs.delimiter = '$';
ejs.render('<$= users.join(" | "); $>', {users: users});
// => 'geddy | neil | alex'
```
