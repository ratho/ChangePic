/**
 * @author Thorsten
 */

$( document ).ready(function() {
	
	reloadPicture();
	
	$('#submit').click(function(){
		//alert ($('#text-password').val());
		//alert ($().crypt({method:"md5",source:$("#text-password").val()})); 
		jQuery.jStorage.set("password-md5", $().crypt({method:"md5",source:$("#text-password").val()}));
		jQuery.jStorage.set("server", $('#text-server').val());
	});
	
	$('#tierpark-open').click(function(){
		updatePicture("tierpark", "open");
	});
	
	$('#tierpark-closed').click(function(){
		updatePicture("tierpark", "closed");
	});
	
	$('#klettern-open').click(function(){
		updatePicture("klettern", "open");
	});
	
	$('#klettern-closed').click(function(){
		updatePicture("klettern", "closed");
	});
	
	$('#load-path-tierpark').click(function(){
		loadpath("tierpark");
	});
	
	$('#load-path-klettern').click(function(){
		loadpath("klettern");
	});
	
	$('#delete').click(function(){
		$.jStorage.flush();
	});
	
});

function updatePicture (bereich, offen) {
	var password = jQuery.jStorage.get("password-md5");
	var server = jQuery.jStorage.get("server");
	//alert (bereich + " - " + offen + " - " + password);
	event.preventDefault();
	
	var data = 'pw=' + password + '&b=' + bereich + '&o=' + offen;
	
	$.ajax({
		type: 'POST',
		url: server + 'ajax.php',
		data: data,
		cache: false,
		success: function (html) {
			$("#" + bereich).html(html);
			reloadPicture();
		}
	});
}

function loadpath (bereich) {
	var password = jQuery.jStorage.get("password-md5");
	var server = jQuery.jStorage.get("server");
	event.preventDefault();
	
	var data = 'pw=' + password + '&b=' + bereich;

	$.ajax({
		type: 'POST',
		url: server + 'data.php',
		data: data,
		cache: false,
		success: function (html) {
			$("#path-" + bereich).html(html);
			jQuery.jStorage.set(bereich, html);
			reloadPicture();
		}
	});
}

function reloadPicture() {
	$('#pic-tierpark').attr("src",jQuery.jStorage.get("tierpark")+"?"+(new Date()));
	$('#pic-klettern').attr("src",jQuery.jStorage.get("klettern")+"?"+(new Date()));
	$('#text-server').val($.jStorage.get("server"));
	$('#path-tierpark').html($.jStorage.get("tierpark"));
	$('#path-klettern').html($.jStorage.get("klettern"));
}
