
$(document).ready(function(){
	$.getJSON("",function(data){
	console.log(data);
	$.each(data.records, function(key, val){
		console.log(val);
		$('.encabezado').append('<li>'+val.Country+'</li>')

	});
});
	})
