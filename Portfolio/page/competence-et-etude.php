<?php
	include('../bdd/initialisation.php');
	include('../bdd/database.php');
	$pdo = getPDO();
	$footer = footer($pdo, $lang);
	$etudes = etude($pdo);
	$text = text_etude($pdo, $lang);
?>
<!DOCTYPE html>
<html lang=<?php echo("'".$lang."'"); ?>>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
 	<link rel="stylesheet" type="text/css" href="../css/formation.css">
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
		<aside class="fl-l" >
			<nav>
				<ul>
					<li><?php echo $text[1][$lang]; ?>
						<ul>
							<li><?php echo $text[0][$lang]; ?>
								<ul>
									<?php
									foreach ($etudes as $table => $etude) {
										if ($etude["type_info"]=="date") {
											echo"<li><a href='#". $table."'>" ;
										}
										if ($etude["type_info"]=="titre") {
											echo $etude[$lang] . "</a></li>\n\t\t";
										}
									}
									?>
								</ul>
							</li>
							
						</ul>
					</li>
				</ul>
			</nav>
		</aside>
		<div id="ecole" class="fl-l" >
			<section>
				<h2><?php echo $text[0][$lang]; ?></h2>
			<?php

				foreach ($etudes as $table => $etude) {

							
					if ($etude["type_info"]=="date") {
						echo "\t\t<h3 id='". $table ."'><span>--- " . $etude[$lang] . "---</span>";
					}
					if ($etude["type_info"]=="titre") {
						echo " | " . $etude[$lang] . "</h3>\n\t\t";
					}
					if($etude["type_info"]=="lieu") {
						echo "<p>" . $etude[$lang] . "</p>\n\t\t";
					}
					if ($etude["type_info"]=="descript") {
						echo "<p>" . $etude[$lang] . "</p>\n\t\t";
					}
					if ($etude["type_info"]=="en_plus") {
						echo "<details><summary>". $text[2][$lang]." : </summary>";
						echo "<p>" . $etude[$lang] . "</p>\n\t\t";
						echo "</details>";
					}
					
				}
					
			?>
			</section>
		</div>
		<aside class="fl-l" >
			<h2><?php echo $text[3][$lang]; ?></h2>
			<img src="../img/menu-competence.png" alt="enseigne">
			
		</aside>		
	</main>
	<?php
		include("../bdd/footer.php");
	?>
</body>
</html>