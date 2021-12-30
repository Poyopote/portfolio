function bouton_menu() {
	let navigation = document.querySelector(".nav-menu") ;
	let lien = document.querySelectorAll(".nav-menu a");
	let ombre = document.querySelector("#header nav") ;
	console.log(navigation);
	if (navigation.style.display === 'none') {
		navigation.style.display = 'block';
		console.log(lien);

function mouseOver() {
	ombre.classList.add("sombre");
}

function mouseOut() {
	ombre.classList.remove("sombre");
}

// let chrono = setInterval(onTick, 50);

		for (let i = 0; i < lien.length; i++){
			lien[i].addEventListener("mouseover", mouseOver);
			lien[i].addEventListener("mouseout", mouseOut);
		}
		// ombre.classList.add("sombre");
	}
	else navigation.style.display = 'none';
}


