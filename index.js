window.onload = function() {
	//toggleAllRuby();
	//document.querySelectorAll('ruby').forEach(rubyElement => rubyElement.addEventListener("click", () =>{
	//	toggleRuby(rubyElement.querySelector("rt"));
	//}));

//	document.querySelectorAll('button').forEach(e => e.addEventListener("click", () =>{
//	  	//const input_html = document.getElementById("input_html");
//		console.log("button");
//	  //console.log(input_html.getAttribute("value").valueOf());
//	}));


//	const button = document.getElementById("button_parse_html");
//
//	button.addEventListener("click", (event) => {
//	  const input_html = document.getElementById("input_html");
//	  console.log(input_html.getAttribute("value").valueOf());
	//	console.log("test");
	  //button.textContent = `Click count: ${event.detail}`;
//	});


}


		//document.addEventListener("DOMContentLoaded", updateATag);

function toggleRuby(item) {
		    if (item.style.visibility === "hidden") {
			item.style.visibility = "visible";
			item.style.visibility = "visible";
		    } else {
			item.style.visibility = "hidden";
			item.style.visibility = "hidden";
		    }
}
function toggleAllRuby() {
    	var rtElements = document.getElementsByTagName("rt");
	for (let item of rtElements) {
		toggleRuby(item);
	}
}

function parseHtml() {
	document.querySelectorAll('input').forEach(e => {
		const parser = new DOMParser()
		const htmlString = e.value;
		const doc3 = parser.parseFromString(htmlString, "text/html");

		var htmlElements = [];
		doc3.querySelectorAll('p').forEach(e => {
			for (const child of e.children) {
				//if (child.tagName == "RUBY") {
				//	htmlElements.push(e.cloneNode(true));
				//	break;
				//}
				//if (child.tagName == "P") {
				//		j
				//	hasRuby = true;
				//	break;
				//}
				if (child.tagName == "SPAN") {
					htmlElements.push(e.cloneNode(true));
					break;
				}
			}
		});

		
		var divElements = document.getElementsByTagName("div");
		var divElement = divElements.item(0);
		for(const htmlElement of htmlElements) {
			divElement.appendChild(htmlElement);
		}
		updateATag();
		toggleAllRuby();
		document.querySelectorAll('ruby').forEach(rubyElement => rubyElement.addEventListener("click", () =>{
			toggleRuby(rubyElement.querySelector("rt"));
		}));


	});
}

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

function updateATag() {
		 var aTags = document.getElementsByTagName('a');

		while (aTags.length > 0) {
			
			// element with same id? seem to need to loop again
			 for (const aTag of aTags) {
				 var div = document.createElement('span');
				 div.innerHTML = aTag.innerHTML;
				 aTag.parentNode.replaceChild(div, aTag);
			}


		 var aTags = document.getElementsByTagName('a');
	}
}


/*
function httpGetAsync() {
	getHtml()
	  .then((result) => console.log(result))
	  .catch((error) => console.error(error));
}

const getHtml = async () => {
  const response = await fetch("http://localhost:8080/example.html");
  if (response.ok) {
    return response.text();
  }
  throw new Error("*** HTML file not found");
};
*/

