$(document).ready(function(){
	var state = "Washington";
	var url = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/semantic/v2/geocodes/query.json";
	url += '?' + $.param({
		'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
		'name': state,
		'feature_class': "A"
	});
	$.ajax({
		url: url,
		method: 'GET'
	}).done(function(result) {
		console.log(result);
		var conceptName = result.results[0]["concept_name"];
		console.log(conceptName);
	}).fail(function(err) {
		throw err;
	});
});