var stories = document.getElementById("stories");
for (var i = 0; i < stories.childNodes.length; i++) {
    console.log("child " + i + " =" + stories.childNodes[i] +
        " nodeType=" + stories.childNodes[i].nodeType);
}

var first = document.getElementById("first");
for (var i = 0; i < first.childNodes.length; i++) {
    if (first.childNodes[i].nodeType === 1) {
        first.childNodes[i].style.backgroundColor = "yellow";
    }
}
