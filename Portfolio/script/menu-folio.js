function bouton_menu() {
	let navigation = document.querySelector(".nav-menu") ;
	let lien = document.querySelectorAll(".nav-menu a");
	let ombre = document.querySelector("#header nav") ; //header#header nav div.nav-menu ::before
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
		
	else{
		navigation.style.display = 'none';
	} 
		
}


		// function evenment(){
		// 	ombre.style.background = 'background: rgba(0, 0, 0, 0.7)';
		// }

		// for (let i = 0; i < lien.length; i++){
		// 	lien[i].addEventListener("mouseover", evenment,false);
		// 	console.log(ombre);
		// }

