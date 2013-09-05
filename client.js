// if user is running mozilla then use it's built-in WebSocket
window.WebSocket = window.WebSocket || window.MozWebSocket;

var connection = new WebSocket('ws://localhost:1337/',['peer-protocol']);

$(function () {

    connection.onopen = function () {
        // connection is opened and ready to use
        alert("connection is opened and ready to use");
        
        // establish connection with 
        connection.send(JSON.stringify({register:true}))
    };

    connection.onerror = function (error) {
        // an error occurred when sending/receiving data
        alert("an error occurred when sending/receiving data",error);
    };

    connection.onmessage = function (message) {
        // try to decode json (I assume that each message from server is json)
        try {
            var json = JSON.parse(message.data);
        } catch (e) {
            alert('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }
        // handle incoming message
        alert(json);
    };
});