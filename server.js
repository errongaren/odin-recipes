const express = require ('express');
const { get } = require('express/lib/response');
const app = express ();


app.listen(3000, function() {
    console.log('listening on 3000')

})


app.get('/', (req, res) => {
    res.send('hello world')

})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})

<!DOCTYPE>
<html lang="en">
<head>
  <meta charset="UTF-8"></meta>
  <title>MY APP</title>
</head>
<body>
  May Node and Express be with you.   
</body>
</html>


