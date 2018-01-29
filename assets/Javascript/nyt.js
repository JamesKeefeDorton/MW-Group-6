function getArticles(state) {

	var conceptName;
	//var state = "New York";
	var urlGeo = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/semantic/v2/geocodes/query.json";
	urlGeo += '?' + $.param({
		'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
		'name': state,
		'feature_class': "A"
	});
	$.ajax({
		url: urlGeo,
		method: 'GET'
	}).done(function(result) {
		//console.log(result);
		conceptName = result.results[0]["concept_name"];
		//console.log(conceptName);
		for (let i = 0; i < conceptName.length; i++) {
			if (conceptName[i] === " ") {
				conceptName = conceptName.slice(0, i) + "%20" + conceptName.slice(i+1);
			}
		}
		var urlSem = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/semantic/v2/concept/name/nytd_geo/" + conceptName;
		urlSem += '?' + $.param({
		'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
		'fields': "article_list"
		});
		console.log(urlSem);
		$.ajax({
			url: urlSem,
			method: 'GET'
		}).done(function(result) {

			//console.log(result);
			$("#well-section").empty();
			renderArticles(result.results[0].article_list.results);

			console.log("urlSem result is ", result);

		}).fail(function(err) {
			throw err;
		});
	}).fail(function(err) {
		throw err;
	});


}


