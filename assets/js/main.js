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
	        	
		        	$('.prediccion').append(`<div>
			        							<img src="dist/iconos/`+data.currently.icon+`.png">`+
								            	`<h1 class="temp center-align">`+ data.currently.apparentTemperature+`</h1>`+
								            	`<h5 class="center-align">Wind: `+data.currently.windSpeed+`</h5>`+
								            	`<h5 class="center-align">Humidity: `+data.currently.humidity+`</h5>`+
								            	`<h5 class="center-align">UV Index: `+data.currently.uvIndex+`</h5>`+
								            	`<h5 class="center-align">Pressure: `+data.currently.pressure+`</h5>
								            </div>`);
           
        })
        .fail(function() {
            console.log('Error con la petición a la Api')
        })
        .always(function() {
            console.log('listo')

	        })
	}




});