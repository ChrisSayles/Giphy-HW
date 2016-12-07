$(document).ready(function() {

	var topics = ["300 movie", "spartacus", "ben-hur", "Cyclops", "rome"];
	createButtons();

	function buttonCreation() {
        $(".gifButtons").empty();
        for (i = 0; i < topics.length; i++) {
            $(".gifButtons").prepend("<button class='btn-primary gifSearch center'>" + topics[i] + "</button>");
        }
    }