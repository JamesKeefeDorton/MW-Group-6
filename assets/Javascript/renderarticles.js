
	function renderArticles(arr) {
		for (let i = 0; i < arr.length; i++) {
			var panel = $("<div>");
			panel.attr("class", "panel");
			var heading = $("<div>");
			heading.attr("class", "panel-heading");
			panel.append(heading);
			var link = $("<a>");
			link.attr("href", arr[i].url);
			link.attr("target", "_blank");
			heading.append(link);
			var title = $("<strong>");
			title.attr("class", "panel-title");
			title.text(arr[i].title);
			link.append(title);
			var body = $("<div>");
			body.attr("class", "panel-body");
			body.text(arr[i].body);
			panel.append(body);
			$("#well-section").append(panel);
		}
	}
$("#clear").on("click", function() {

  $("#well-section").empty();
});