const express = require('express');
const routes = require('./routes/index');
const app = express();

const port = 8000;


//use express router

app.use('/',routes);

app.listen(port,function(err){
    if(err){
       console.log(`Error ${err}`);
    }
    console.log('Server is running on port '+port);
});

