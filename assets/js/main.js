$(document).ready(function(){

	function ubicacion(){
		console.log("asd")
	    if(navigator.geolocation){
	        navigator.geolocation.getCurrentPosition(found);
	    }
	}

	window.addEventListener("load", function(){ console.log("asd")});

	var lat, lon;
	var found = function(posicion){
	    lat = posicion.coords.latitude;
	    lon = posicion.coords.longitude;
	    console.log(lat);
	    console.log(lon);
	    clima(lat,lon);
	}
	var notFound = function(error){
	    alert("No pudimos encontrar tu ubicación");
	}

	function mostrar_clima(){
	    $.ajax({
	            url: 'https://api.darksky.net/forecast/531a2bfeb1f8b86dacedb4dcb7ee7a87/37.8267,-122.4233',
	            type: 'GET',
	            crossDomain: true,
	   			dataType: 'jsonp',
	            data: { 'limit':'833'},
	            
	        })
	        .done( function(data){
	        	console.log(data.minutely.data);
	        	
	        	$('.prediccion').append('<img src="dist/iconos/'+data.currently.icon+'.png">');
           
        })
        .fail(function() {
            console.log('Error al conectar a la Api')
        })
        .always(function() {
            console.log('Completado')

	        })
	}




});