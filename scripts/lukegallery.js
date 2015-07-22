$(document).ready(function() {

	//carousel navigation
	$(".previous").click(function() {
		$("#myCarousel").carousel("prev");	
	});
	$(".next").click(function() {
		$("#myCarousel").carousel("next");	
	});

	//define Picture object
	function Picture(title, price, height, width, description) {
		this.title = title;
		this.price = price;
		this.height = height;
		this.width = width;
		this.description = description;
	}

	//define var's to store text values
	var title = "";
	var about = "";

	function updateTitle(new, old) {
		var newTitle = document.getElementbyId(newTitle),
		headline = document.getElementById(headline);
		if(newTitle.value) {
			headline.innerHTML = newTitle.value;
		}
		else {
			newTitle.focus();
		}
	};



	/*
	$("#headform > :submit").click(function() {
		$("#headline").replaceWith('[name="newTitle"]');
	});
	*/
});
