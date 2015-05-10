
var username;
var apiUrl = "https://api.github.com/users/";
var userApiUrl;

$("#submit").on("click", function(event) {
    username = $("#username").val();
    event.preventDefault();
    userApiUrl = apiUrl + username;

    $.getJSON(userApiUrl, function(data) {
	   document.getElementById("img").src = data.avatar_url;
	   console.log(data);
	});
});


