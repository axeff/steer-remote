$(function () {


    window.ondevicemotion = function(event) {
    	var acceleration = {
    	    x: event.accelerationIncludingGravity.x,
    	    y: event.accelerationIncludingGravity.y,
            z: event.accelerationIncludingGravity.z
        }

        
        $('#debug').html(JSON.stringify(acceleration));

    }


    $('#debuglink').click(function(){
        alert("sending...");
        connection.send(JSON.stringify({receiverId:"da8a3d39-cb8c-49ec-9d74-61075a06c76d",message:{}}));
        return false;
    });

});


