#Traversal
Traversal is a nodejs module that help developer to traversal folder, for it depend on `find`,  now it can only use under *iux;

##Install 
just clone the code into your work directory

```
git clone https://github.com/jserme/traversal.git 
```

##Use
```javascript
var traver = require('./traversal');

traver('path/u/start/to/scan', function(err, file){
    console.log( file );
});
```
