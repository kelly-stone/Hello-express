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

**[ejs](https://ejs.co/)**

```let ejs = require('ejs'),
    users = ['geddy', 'neil', 'alex'];

// Just one template
ejs.render('<?= users.join(" | "); ?>', {users: users}, {delimiter: '?'});
// => 'geddy | neil | alex'

// Or globally
ejs.delimiter = '$';
ejs.render('<$= users.join(" | "); $>', {users: users});
// => 'geddy | neil | alex'
```
