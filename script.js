
var username;
var apiUrl = "https://api.github.com/users/";
var avatarUrl;

$("#submit").on("click", function(event) {
    username = $("#username").val();
    event.preventDefault();
    avatarUrl = apiUrl + username;

    $.getJSON(avatarUrl, function(data) {
	   document.getElementById("img").src = data.avatar_url;
	   console.log(data);
	});

    console.log("clicked", username, avatarUrl);
});


