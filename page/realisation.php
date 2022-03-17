<?php
	include('../bdd/initialisation.php');
	include('../bdd/database.php');
	$pdo = getPDO();
	$footer = footer($pdo, $lang);
	$projets = projet($pdo);	$documents = voirprojet($pdo);

?>
<!DOCTYPE html>
<html lang=<?php echo("'".$lang."'"); ?>>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
  	<link rel="stylesheet" type="text/css" href="../css/projet.css">
	<link rel="icon" type="image/svg" href="../img/mouv_mauve_1.svg" sizes="16x16">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="../script/menu-folio.js"></script>
	<title>Steven Ladour - Portfolio</title>
</head>
<body>
	<?php
		include("../bdd/header.php");
	?>
	<main>
		<div>
			<section>
				<h2>Projet réalisation</h2>
					<article>
					<?php  

						foreach ($projets as $table => $projet) {

							
							if ($projet["type"]=="titre") {
								echo "\t\t<h3>" . $projet[$lang] . "</h3>\n";
							}



							foreach($documents as $cle => $docu){
								if ($projet["projet_id"] == $docu["ficher_id"] && $projet["type"]=="titre"){
									if ($docu["type_fichier"]=="image"){
										echo ("\t\t\t\t<a href='../doc/". $docu["fichier"]."'><img src='../doc/". $docu["fichier"]."' width='20' alt='image'></a>\n");
									}
									if ($docu["type_fichier"]=="doc") {
										echo ("\t\t\t\t<p>Voir document : <a href='../doc/". $docu["fichier"]."'>". $docu["fichier"] . "</a></p>\n");
									}
								}


							}

							if ($projet["type"]=="techno") {
								echo "\t\t\t\t<p>" . $projet[$lang] . "</p>\n";
							}
							if ($projet["type"]=="description") {
								echo "\t\t\t\t<p>" . $projet[$lang] . "</p>\n\t\t";
							}


		
						}

					?>
				</article>
			</section>
		</div>
	</main>
	<?php
		include("../bdd/footer.php");
	?>
</body>
</html>