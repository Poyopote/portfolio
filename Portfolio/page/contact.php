<?php
	include('../bdd/initialisation.php');
	include('../bdd/database.php');
	$pdo = getPDO();
	$contact = contact($pdo, $lang);
	$footer = footer($pdo, $lang);
?>
<!DOCTYPE html>
<html lang= <?php echo("'".$lang."'"); ?> >
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
 	<link rel="stylesheet" type="text/css" href="../css/contact.css">
	<link rel="icon" type="image/svg" href="../img/mouv_mauve_1.svg" sizes="16x16">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="../script/menu-folio.js"></script>
	<title><?php echo($contact[0][$lang]); ?></title>
</head>
<body>
	<?php
		include("../bdd/header.php");
	?>
	<main>
		<section>
			<h2><?php echo($contact[0][$lang]); ?></h2>
 			<form action="mailto:stevenladour@gmail.com" method="get" enctype="text/plain">
 			<fieldset>
				<legend><?php echo($contact[1][$lang]); ?></legend> 
				<label for="email">E-mail</label>
				<input type="email" id="email" name="email" placeholder="<?php echo($contact[2][$lang]); ?>">
				<textarea name="message" id="message" rows="4" cols="50" placeholder="<?php echo($contact[3][$lang]); ?>" style=" width:100%"></textarea>
				<input type="submit" value="<?php echo($contact[4][$lang]); ?>">
			</fieldset>
		</form>
		</section>
	</main>
	<?php
		include("../bdd/footer.php");
	?>
</body>
</html>