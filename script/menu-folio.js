function bouton_menu() {
	let navigation = document.querySelector(".nav-menu") ;
	let ombre = document.getElementById('overlay');

	if (navigation.style.display === 'none' && ombre.style.display === 'none') {
		
		navigation.style.display = 'block';
		ombre.style.display = 'block';

	}
		
	else{
		ombre.style.display = 'none';
		navigation.style.display = 'none';
	} 
		
}

// const titre = 		<section className="presentation">
// <div className="section-div">
// 	<h2>Steven LADOUR</h2>
// 	<p>Intégrateur Web / Webdesigner - Portfolio</p>
// 	<a className="btn" href="doc/CV_LADOUR.pdf"><span>Télécharger</span>  mon CV</a>					
// </div>
// <div>
// 	<img src="img/princial.png" alt="image" className="art-image"></img>
// </div>
// </section>

// ReactDOM.render(titre, document.querySelector('main'))