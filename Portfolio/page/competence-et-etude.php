<?php
	include('../bdd/initialisation.php');
	include('../bdd/database.php');
	$pdo = getPDO();
	$footer = footer($pdo, $lang);
?>
<!DOCTYPE html>
<html lang=<?php echo($lang); ?>>
<head>
	<meta charset="utf-8">
 	<link rel="stylesheet" type="text/css" href="../css/style.css">
 	<link rel="stylesheet" type="text/css" href="../css/parcourt.css">
	<link rel="icon" type="image/svg" href="../img/mouv_mauve_1.svg" sizes="16x16">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Steven Ladour - Portfolio</title>
</head>
<body>
	<?php
		include("../bdd/header.php");
	?>
	<main>
		<aside class="fl-l" >
			<nav>
				<ul>
					<li>Sommaire
						<ul>
							<li>Formation et Diplome</li>
							<li>Expérience Professionnel</li>
							<li>Comptences</li>
						</ul>
					</li>
				</ul>
			</nav>
		</aside>
		<div id="ecole" class="fl-l" >
			<section>
				<h2>Formation et Diplome</h2>
				<article class="diplome">
					<h3><span>---2021 à maintenant---</span> | License professionnel IMApp </h3>
					<p>Université Côte d'Azur Campus Carlone 98 bd Edouard Herriot BP 3209 06204 NICE Cedex 3</p>
					<p>formation dévlopeur web, </p>
				</article>
				<article class="diplome">
					<h3><span>---Date ---</span>Titre de la formation</h3>
					<p>Lieux de la formation</p>
					<p>descrption : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus ante ut sem condimentum malesuada. Nullam id dui dapibus, malesuada nisi eget, auctor velit. In hac habitasse platea dictumst. Sed sollicitudin sit amet elit eu mattis. Duis quis quam sit amet risus malesuada imperdiet non quis ipsum. Mauris maximus sed tortor sed accumsan. Proin a metus nec nisi dignissim placerat. Vivamus sagittis, nibh at mattis tristique, lorem leo volutpat neque, at cursus odio lorem vel leo. Nulla facilisi. Integer eu semper orci, ac posuere odio. Morbi et ex eget magna sodales egestas. Nulla mollis hendrerit lacus. Suspendisse erat nibh, venenatis id porttitor eu, consectetur bibendum ante. Sed eu lorem nisi. Mauris enim enim, rhoncus nec semper eget, rhoncus vel lorem. Nulla pulvinar, erat ac auctor ultricies, dui nisl placerat leo, quis tristique magna ex eget nibh.</p>
				</article>
				<article class="diplome">
					<h3><span>---Date ---</span>Titre de la formation</h3>
					<p>Lieux de la formation</p>
					<p>descrption : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus ante ut sem condimentum malesuada. Nullam id dui dapibus, malesuada nisi eget, auctor velit. In hac habitasse platea dictumst. Sed sollicitudin sit amet elit eu mattis. Duis quis quam sit amet risus malesuada imperdiet non quis ipsum. Mauris maximus sed tortor sed accumsan. Proin a metus nec nisi dignissim placerat. Vivamus sagittis, nibh at mattis tristique, lorem leo volutpat neque, at cursus odio lorem vel leo. Nulla facilisi. Integer eu semper orci, ac posuere odio. Morbi et ex eget magna sodales egestas. Nulla mollis hendrerit lacus. Suspendisse erat nibh, venenatis id porttitor eu, consectetur bibendum ante. Sed eu lorem nisi. Mauris enim enim, rhoncus nec semper eget, rhoncus vel lorem. Nulla pulvinar, erat ac auctor ultricies, dui nisl placerat leo, quis tristique magna ex eget nibh.</p>
				</article>
			</section>
			<section>
				<h2>Expérience Professionnel</h2>
				<article class="exp">
					<h3><span>---Date ---</span>Nom de l'entreprise</h3>
					<p>Lieux de l'entreprise</p>
					<p>descrption : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus ante ut sem condimentum malesuada. Nullam id dui dapibus, malesuada nisi eget, auctor velit. In hac habitasse platea dictumst. Sed sollicitudin sit amet elit eu mattis. Duis quis quam sit amet risus malesuada imperdiet non quis ipsum. Mauris maximus sed tortor sed accumsan. Proin a metus nec nisi dignissim placerat. Vivamus sagittis, nibh at mattis tristique, lorem leo volutpat neque, at cursus odio lorem vel leo. Nulla facilisi. Integer eu semper orci, ac posuere odio. Morbi et ex eget magna sodales egestas. Nulla mollis hendrerit lacus. Suspendisse erat nibh, venenatis id porttitor eu, consectetur bibendum ante. Sed eu lorem nisi. Mauris enim enim, rhoncus nec semper eget, rhoncus vel lorem. Nulla pulvinar, erat ac auctor ultricies, dui nisl placerat leo, quis tristique magna ex eget nibh.</p>
				</article>
			</section>
		</div>
		<aside class="fl-l" >
			<h2>Compétence pratique</h2>
			<img src="../img/menu-competence.png" alt="enseigne">
			
		</aside>		
	</main>
	<?php
		include("../bdd/footer.php");
	?>
</body>
</html>