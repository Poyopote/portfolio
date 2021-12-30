
const text = document.querySelector(".btn span") ;
const diviser = text.textContent.split("");
text.textContent = "";

console.log(diviser);

for (let i = 0; i < diviser.length; i++) {
	text.innerHTML += "<span>"+ diviser[i] + "</span>";
}

let char = 0;
let chrono = setInterval(onTick, 50);

function onTick(){
	const span = text.querySelectorAll(".btn span span")[char];
	span.classList.add("fondu");
	char++;
	if (char === diviser.length) {
		complete();
		return
	}
}

function complete(){
	clearInterval(chrono);
	timer = null;
}