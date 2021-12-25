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
 	<link rel="stylesheet" type="text/css" href="../css/contact.css">
	<link rel="icon" type="image/svg" href="../img/mouv_mauve_1.svg" sizes="16x16">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Steven Ladour - Portfolio</title>
</head>
<body>
	<?php
		include("../bdd/header.php");
	?>
	<main>
		<section>
			<h2>Formulaire de contact</h2>
			<form action="#">
			<fieldset style="max-width:736px;min-height:50px;height:100%;width:100%;">
				<legend>Contactez-moi</legend> 
				<label for="email">Email</label>
				<input type="email" id="email" name="email" placeholder="Votre adresse">
				<textarea name="message" id="message" rows="4" cols="50" placeholder="Votre message" style=" width:100%"></textarea>
				<input type="submit" value="Envoyer">
			</fieldset>
		</form>
		</section>
		<aside>
			<div>
				<img src="../img/mouv_violet_0.svg" alt="motif">
			</div>
			<div>
				<img src="../img/mouv_violet_1.svg" alt="motif">
			</div>
			
		</aside>
	</main>
	<?php
		include("../bdd/footer.php");
	?>
</body>
</html>