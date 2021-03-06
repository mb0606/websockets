


var server = require('ws').Server;
var s = new server({port:5001}, console.log("ws server"));

s.on('connection', function(ws){
  ws.on('message', function(message){

    message = JSON.parse(message);
    if(message.type == "name"){
      ws.personName = message.data;
      return;
    }
    console.log("Received: ",message);
    s.clients.forEach(function e(client){
      if(client != ws) {
      client.send(JSON.stringify({
        name: ws.personName,
        data: message.data
      }));
      }
    })
    if(message == "Hello"){
      ws.send("Hey there from server!");
    }

    ws.on('close', function(){
      console.log("I lost a client")
    })
  })
  console.log("Another client connected")
})