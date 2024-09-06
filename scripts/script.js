var button = document.querySelector("button");
var article = document.querySelector("article");
var img = document.querySelector(".image-container");
var h1 = document.querySelector("h1");


var isChanged = false

button.addEventListener("click", function() {

    if (isChanged) {
        article.style.background = "linear-gradient(to bottom, red, black)";
        img.style.background = "linear-gradient(to bottom, red, black)";
        h1.style.color = "black";
    }
    else {
        article.style.background = "linear-gradient(0deg, rgb(28, 25, 123) 30%, #0bd2ff 100%)";
        img.style.background = "linear-gradient(to bottom, rgb(13, 194, 243), rgb(33, 14, 133))";
        h1.style.color = "rgba(0, 239, 255, 1)";
    }

    isChanged = !isChanged;

  });