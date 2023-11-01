document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the button
    var button = document.getElementById("clickMe");
    var output = document.getElementById("output");

    button.addEventListener("click", function () {
        output.innerHTML = "Button Clicked!";
    });
});
