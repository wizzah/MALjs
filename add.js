// Content is loaded after window is loaded so we have to wait before touching the DOM...
window.setTimeout(function(){
	// Add MAL link to every title
	var titles = document.querySelectorAll(".card__title");
	for(var i = 0, length = titles.length; i < length; i++) {
		titles[i].innerHTML += '<br /><a href="#" class="add__anime">Add to MAL</a>';
	}
	// Add event handler for every link we add
	var addLinks = document.querySelectorAll(".add__anime");
	for(var i = 0, length = addLinks.length; i < length; i++) {
		addLinks[i].addEventListener("click", function(e){
			e.preventDefault();
			var title = this.parentNode.querySelector(".ng-binding").innerHTML;
			var oReq = new XMLHttpRequest();
			oReq.onload = function(){
				alert(this.responseText);
			};
			// Needs username/password...
			oReq.open("get", "http://myanimelist.net/api/anime/search.xml?q="+encodeURIComponent(title), true);
			oReq.send();
		});
	}	
}, 2500);
