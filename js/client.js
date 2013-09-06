$(function () {
    setup();
    
    /* override existing one for special needs */
    connection.onmessage = function (message) {
        // try to decode json (I assume that each message from server is json)
        try {
            var json = JSON.parse(message.data);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }

        // handle incoming message
        if(json.connectionId){
            $('#uuid').html(json.connectionId);
            
            var url = window.location.protocol + '//' + window.location.host + '/steer.html#' + json.connectionId;
            setupqr();
            doqr(url);
            
        }else if (json.message.x && json.message.y && json.message.z){
            $('#qrdiv').hide('slow');
            $('#debug').html(
                'x: ' + json.message.x + '<br/>' +
                'y: ' + json.message.y + '<br/>' +
                'z: ' + json.message.z);
                $('#phone').css({
                    '-webkit-transform': 'rotate(' + json.message.y * -5 + 'deg)',
                    '-moz-transform': 'rotate(' + json.message.y * -5 + 'deg)', 
                    '-o-transform': 'rotate(' + json.message.y * -5 + 'deg)', 
                    '-ms-transform': 'rotate(' + json.message.y * -5 + 'deg)', 
                    'transform': 'rotate(' + json.message.y * -5 + 'deg)'
                });
        }
    };
});


var draw_qrcode = function(text, typeNumber, errorCorrectLevel) {
	$('#uuid').prepend(create_qrcode(text, typeNumber, errorCorrectLevel) );
};

var create_qrcode = function(text, typeNumber, errorCorrectLevel, table) {

	var qr = qrcode(typeNumber || 4, errorCorrectLevel || 'M');
	qr.addData(text);
	qr.make();

//	return qr.createTableTag();
	return qr.createImgTag();
};


var setup = function(){
    $('#qrdiv').click(function(){
        $(this).hide('slow');
    });
    $('#showqr').click(function(){
        
        $('#qrdiv').show('slow');
    });
}