alert('My project is going to be awesome!');
$("#noShow").hide();
$("h1").html("The Best Jokes Ever!");
$("#joke").append("<p>Q. What do you call a fake noodle? <br /> A. An impasta</p>");
$("#toggleJokes").click(function() {
    $("#joke").toggle();
});

const response = prompt("Are these jokes good or bad?");
if (response === "bad") {
    $("h1").html("The Worst Jokes! :(");
} else if (response === "good") {
    $("h1").html("The Best Jokes Ever! :)");
} else {
    $("h1").html("The Best Jokes Ever!");
}
