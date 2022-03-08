const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let spans = document.querySelectorAll("h1 span");
spans.forEach(function(span, index) {span.style.color = colors[index]});