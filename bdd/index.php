<?php
	include('bdd/initialisation.php');
	include("bdd/database.php");
	$pdo = getPDO();
	$home = home($pdo, $lang);

	$footer = footer($pdo, $lang);
?>
<!DOCTYPE html>
<html lang=<?php echo("'".$lang."'"); ?>>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="icon" type="image/svg" href="img/mouv_mauve_1.svg" sizes="16x16">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="script/menu-folio.js"></script>
	<title>Steven Ladour - Portfolio</title>
</head>
<body>
	<header id="header">
		<section>
			<h1>Navigation</h1>
			<input onclick="bouton_menu()" type="image" src="img/menu.png" alt="menu">
			<!-- <div class="logo"></div> -->
			<nav class="nav-menu" style="display: none;">
				<a href="page/presentation.php" class="nav-lien"><img src="img/menu-presenation.png" alt="menu"></a>
				<a href="page/competence-et-etude.php" class="nav-lien"><img src="img/menu-competence.png" alt="menu"></a>
				<a href="#" class="nav-lien"><img src="img/menu-home.png" alt="home"></a>
				<a href="page/realisation.php" class="nav-lien"><img src="img/menu-projet.png" alt="menu"></a>
				<a href="page/contact.php" class="nav-lien"><img src="img/menu-contact.png" alt="menu"></a>
			</nav>
			<div id="overlay" style="display: none;"></div>
		</section>		
	</header>
	<main>
		<section class="presentation">
			<div class="section-div">
				<h2>Steven LADOUR</h2>
				<p>Webmaster & Webdesigner - Portfolio</p>
				<p class="btn"><span><?php echo $home[0][$lang];  ?></span> <?php echo $home[1][$lang] ;  ?></p>
				<script src="script/bouton.js"></script>				
			</div>
			<div>
				<img src="img/princial.png" alt="image" class="art-image">
			</div>
		</section>
	</main>
	<footer class="clear">
		<div class="div-footer">
			<details>
				<summary><?php echo $footer[0][$lang];  ?></summary>
				<ul class="tab-langue">
					<li><a href="?lang=fr" class="item france"><?php echo $footer[1][$lang];  ?></a></li>
					<li><a href="?lang=en" class="item uk"><?php echo $footer[2][$lang];  ?></a></li>
				</ul>
			</details>
		</div>
		<div class="div-footer">
			<p><?php echo $footer[3][$lang];  ?></p>
		</div>
		<div class="div-footer">
			<p><a href='bdd/choixtable.php'>Administation</a></p>
		</div>
    <div class="div-footer">
      <p>01.02.03.04.05</p>
    </div>
	</footer>
</body>
</html>
