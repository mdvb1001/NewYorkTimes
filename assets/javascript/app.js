$('button').on('click', function() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	url += '?' + $.param({
		'api-key': "b80327eafb814e47b56742e9cf7732c5",
		'q': "",
		// 'begin_date': "",
		// 'end_date': ""
	});

	$.ajax({
		url: url,
		method: 'GET',
	}).done(function(result) {
	 	console.log(result);
	 	
	});
});			

