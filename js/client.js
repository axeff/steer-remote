$(function () {
    /* override existing one for special needs */
    connection.onmessage = function (message) {
        // try to decode json (I assume that each message from server is json)
        try {
            var json = JSON.parse(message.data);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }
        console.log(json);
        // handle incoming message
        if(json.connectionId){
            $('#uuid').html(json.connectionId);
        }else if (json.message.x && json.message.y && json.message.z){
            $('#debug').html(
                'x: ' + json.message.x + '<br/>' +
                'y: ' + json.message.y + '<br/>' +
                'z: ' + json.message.z);
        }
    };
});