<?php
	include('../bdd/initialisation.php');
	include('../bdd/database.php');
	$pdo = getPDO();
	$je_suis = my_moi($pdo, $lang);
	$footer = footer($pdo, $lang);
?>
<!DOCTYPE html>
<html lang=<?php echo("'".$lang."'"); ?>>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
 	<link rel="stylesheet" type="text/css" href="../css/presentation.css">
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
		<section class="presentation">
			<h2><?php echo $je_suis[0][$lang];  ?></h2>
			<article>
				<h3><?php echo $je_suis[1][$lang];  ?></h3>
				<div class="cadre moi fl-l"></div>
				<p><?php echo $je_suis[2][$lang];  ?></p>
				
			</article>
			<div class="clear"></div>
			<article>
				<h3><?php echo $je_suis[1][$lang];  ?></h3>
				<div class="cadre code fl-l"></div>
				<p><?php echo $je_suis[3][$lang];  ?></p>
			</article>
		</section>
	</main>
	<?php
		include("../bdd/footer.php");
	?>
</body>
</html>