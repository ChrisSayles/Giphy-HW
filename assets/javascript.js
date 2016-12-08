$(document).ready(function() {

    var topics = ["300 movie", "spartacus", "ben-hur", "Cyclops", "rome"];
    buttonCreation();

    function buttonCreation() {
        $(".gifButtons").empty();
        for (i = 0; i < topics.length; i++) {
            $(".gifButtons").prepend("<button class='btn-primary gifSearch center'>" + topics[i] + "</button>");
        }
    }

    function clearResults() {
    	console.log("testing clear")
    	$("#image-view").empty();

    }






    //syntax from addbutton in class assignment
    function queryData() {
        var selected = $(this).text();
        // console.log("selected= " + selected);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
            selected + "&api_key=dc6zaTOxFJmzC&limit=5";
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response) {
                var results = response.data;
                
                console.log(results);
                $("#image-view").empty();
                for (var index = 0; index < results.length; index++) {
                 
                    $("#image-view").append(results[index]);
                    console.log(results[index].images.original.url);
                    $("#image-view").append("<img src='" + (results[index].images.original.url) + "'>");
                    $("#image-view").append("<div>rating " + (results[index].rating) + "</div>");

                }
            });

    }
    $(document).on("click", ".gifSearch", queryData);
    $(document).on("click", "#clearResults", clearResults);
    $("#Search").on("click", function(event) {
        event.preventDefault();
        console.log("buttonclicked");
        var movie = $("#buttonInput").val()
        console.log(movie);
        $(".gifButtons").append("<button class='gifSearch btn-primary'>" + movie + "</button>");
      });

});
