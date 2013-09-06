var interval = sendInterval,
    acceleration;
var uuidHandshake = window.location.hash.substring(1,window.location.hash.length); //'e734c46a-8b10-4572-a202-1e6e5ef6cc9f';

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




