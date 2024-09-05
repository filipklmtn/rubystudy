function toggleRuby(item) {
	if (item.style.visibility === "hidden") {
		item.style.visibility = "visible";
		item.style.visibility = "visible";
	} else {
		item.style.visibility = "hidden";
		item.style.visibility = "hidden";
	}
}
function togglePaint() {
	const item = document.getElementById("js-paint");
	const context = item.getContext('2d');

	if (item.style.visibility === "hidden") {
		item.style.visibility = "visible";
		item.style.display = "block";
		item.width = window.innerWidth;
		item.height = window.innerHeight;
		context.lineCap = 'round';
		context.strokeStyle = "#ff0000";
		context.lineWidth = 10;
	} else {
		item.style.visibility = "hidden";
		item.style.visibility = "hidden";
		item.style.display = "none";
	}
}

function toggleAllRuby() {
  var rtElements = document.getElementsByTagName("rt");
  for (let item of rtElements) {
    toggleRuby(item);
  }
}

function parseHtml() {
	document.querySelectorAll('input#input_html').forEach(e => {
		const parser = new DOMParser()
		const htmlString = e.value;
		const doc3 = parser.parseFromString(htmlString, "text/html");

		var htmlElements = [];
		doc3.querySelectorAll('p').forEach(e => {
			for (const child of e.children) {
				if (child.tagName == "SPAN") {
					let n = e.cloneNode(true);
					if (n.hasChildNodes() == true) {
						htmlElements.push(n);
						break;
					}
				}
			}
		});

		
  var divElement = document.getElementById("parsed_content");
  divElement.innerHTML = "";
  for(const htmlElement of htmlElements) {
    const clean = DOMPurify.sanitize(htmlElement);
    const domClean = document.createRange().createContextualFragment(clean);
    divElement.appendChild(domClean);
  }
  toggleAllRuby();
  document.querySelectorAll('ruby').forEach(rubyElement => rubyElement.addEventListener("click", () =>{
    toggleRuby(rubyElement.querySelector("rt"));
    }));
  });
}
