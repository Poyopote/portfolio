<?php
	include('../bdd/initialisation.php');
	include('../bdd/database.php');
	$pdo = getPDO();
	$footer = footer($pdo, $lang);
	$projets = projet_info($pdo, $lang);
?>
<!DOCTYPE html>
<html lang=<?php echo($lang); ?>>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
 	<link rel="stylesheet" type="text/css" href="../css/projet.css">
	<link rel="icon" type="image/svg" href="../img/mouv_mauve_1.svg" sizes="16x16">
	<meta name="viewport" content="width=device-width, initial-scale=1">
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
						// print_r($projets);
						foreach ($projets as $table => $projet) {
						 	echo "\t\t<h3>" . $projet["titre"] . "</h3>\n";
						 	echo "\t\t\t\t<p>" . $projet["outil"] . "</p>\n";
						 	echo "\t\t\t\t<p>" . $projet[$lang] . "</p>\n\t\t";
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