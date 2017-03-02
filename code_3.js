// TODO: store reference to the navbar, the article inside vars
var navBar = document.getElementById("spongebob-nav"); /* YOUR CODE HERE*/

var article = document.getElementById("spongebob-article"); /* YOUR CODE HERE*/

// TODO: store an *array* reference of the toggle buttons inside a var
var toggleBtns = Array.from(
					document.getElementsByClassName("nav-toggle")
				); /* YOUR CODE HERE*/

// TODO: Add event listeners to the buttons to register clicks
// On click, the toggles will slide the navbar in or out
toggleBtns.forEach(function(btn) {
	/* YOUR CODE HERE*/
	btn.addEventListener("click", function(e){
		e.preventDefault();
		console.log(e);
		navBar.classList.toggle("active");
		article.classList.toggle("active");
	})
});

