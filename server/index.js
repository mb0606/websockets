var server = require('ws').Server;
var s = new server({port:5001}, console.log("ws server"));

s.on('connection', function(ws){
  ws.on('message', function(message){
    console.log("Recieved: ",message);

    if(message == "Hello"){
      ws.send("Hey there from server!");
    }

  })
})