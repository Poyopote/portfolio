<?php

include('initialisation.php');
include("database.php");

?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
 	<link rel="stylesheet" type="text/css" href="../css/admin.css">
	<link rel="icon" type="image/svg" href="../img/mouv_mauve_1.svg" sizes="16x16">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="../script/menu-folio.js"></script>
	<title>Administration</title>
	<style type="text/css">
		body{background: rgba(255, 255, 255, 0.7);}
	</style>
</head>
<body>
<?php  
unset($_SESSION['login']);
// unset($_SESSION['pwd']);
// unset($_SESSION['backoff']);


?>
<h2>Vous avez bien été déconnecté du Back Office.</h2>
<a href="../index.php">Retour à la page d'accueil</a>
</body>
</html>