console.log("hi");
var submission = document.forms["input"];
if(submission.addEventListener) {
	submission.addEventListener("submit", function() {
		console.log("submitted");
	}, false);
}