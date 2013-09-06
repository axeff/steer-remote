var interval = sendInterval;
var acceleration;
window.ondevicemotion = function(event) {
    acceleration = {
	    x: event.accelerationIncludingGravity.x,
	    y: event.accelerationIncludingGravity.y,
        z: event.accelerationIncludingGravity.z
    }

}


setInterval(function() {
    
    $('#debug').html(JSON.stringify(acceleration));
    connection.send(JSON.stringify({
        receiverId: uuidHandshake,
        message: acceleration
    }));
},interval);




