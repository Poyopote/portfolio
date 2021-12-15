<!DOCTYPE html>

<?php
	// Fonctions
	include("database.php");

	//
	$lang = $_GET["lang"];

	if (empty($lang))
		$lang = "fr";

	$pdo = getPDO();
	$result = BDD($pdo, $lang);
	
	// print_r($result);
?>


<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
 	<link rel="stylesheet" type="text/css" href="style.css">
  	<link rel="stylesheet" type="text/css" href="main.css">
	<link rel="icon" type="image/svg" href="img/mouv_mauve_1.svg" sizes="16x16">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Steven Ladour - Portfolio</title>
</head>
<body>
	<header id="header">
		<nav>
			<input type="image" src="img/menu.png" alt="menu">
			<!-- <div class="logo"></div> -->
			<div class="nav-menu">
				<!-- <h1>Accueil</h1> -->
				<a href="page/presentation.html" class="nav-lien"><img src="img/menu-presenation.png" alt="menu"></a>
				<a href="page/competence-et-etude.html" class="nav-lien"><img src="img/menu-competence.png" alt="menu"></a>
				<a href="#" class="nav-lien"><img src="img/menu-home.png" alt="menu"></a>
				<a href="page/realisation.html" class="nav-lien"><img src="img/menu-projet.png" alt="menu"></a>
				<a href="page/contact.html" class="nav-lien"><img src="img/menu-contact.png" alt="menu"></a>
			</div>
		</nav>		
	</header>
	<main>
		<section class="presentation">
			<div class="section-div">
				<h2>Steven LADOUR</h2>
				<p>Webmaster & Webdesigner - Portfolio</p>
				<p class="btn"><span><?php echo $result[0][$lang];  ?></span> <?php echo $result[1][$lang] ;  ?></p>
			</div>
			<div>
				<img src="img/princial.png" alt="image" class="art-image">
			</div>
		</section>
	 	<aside>
			<!-- <img src="img/mouv_bleu_0.svg" alt="motif">
			<img src="img/mouv_bleu_1.svg" alt="motif">
			<img src="img/mouv_violet_0.svg" alt="motif">
			<img src="img/mouv_violet_1.svg" alt="motif">-->
		</aside> 
	</main>
	<footer class="clear">
		<div class="div-footer">
			<details>
				<summary>Langues</summary>
				<ul class="tab-langue">
					<li><a href="?lang=fr" class="item france">Français</a></li>
					<li><a href="#" class="item es">Espagnol</a></li>
					<li><a href="?lang=en" class="item uk">Anglais</a></li>
				</ul>
			</details>
		</div>
		<div class="div-footer">
			<p>Mentions Légales</p>
		</div>
		<div class="div-footer">
			<p>Lorem Ipsum</p>
		</div>
    <div class="div-footer">
      <p>01.02.03.04.05</p>
    </div>
	</footer>
</body>
</html>