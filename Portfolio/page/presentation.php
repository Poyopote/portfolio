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
 	<link rel="stylesheet" type="text/css" href="../css/presentation.css">
	<link rel="icon" type="image/svg" href="../img/mouv_mauve_1.svg" sizes="16x16">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Steven Ladour - Portfolio</title>
</head>
<body>
	<?php
		include("../bdd/header.php");
	?>
	<main>	
		<section class="presentation">
			<h2>Qui suis-je ?</h2>
			<article>
				<h3>A propos de moi</h3>
				<div class="moi fl-l"></div>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue purus nec enim viverra feugiat. Nunc hendrerit sodales ultricies. In lacinia erat dolor, sit amet ultricies eros laoreet et. Integer vel lectus metus. Nunc eleifend sodales sapien, viverra facilisis orci tempus quis. Quisque vulputate dolor ac luctus lobortis. Duis rhoncus neque congue purus dapibus bibendum. Ut congue nulla sit amet turpis feugiat scelerisque. Aenean malesuada diam non ante feugiat, id ullamcorper risus sodales. Praesent dictum libero ac ipsum tempus tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse pretium ligula mi, ac hendrerit purus sagittis in. Mauris dictum convallis lobortis. </p>
				<p> Phasellus sed fermentum tortor. Ut malesuada nec risus sit amet facilisis. Aliquam cursus leo vitae ligula tristique, a feugiat augue molestie. Aenean erat quam, sagittis euismod mauris eu, luctus auctor tellus. Maecenas id nibh arcu. Donec vel consectetur orci. Nullam convallis a felis sit amet elementum. Pellentesque quam sem, pretium sed nisl et, lacinia laoreet turpis. Nunc et ultricies purus, vel sollicitudin turpis. Pellentesque mattis diam vel tortor cursus sodales. Nullam eu turpis fringilla, placerat risus nec, imperdiet ante. </p>
			</article>
			<div class="clear"></div>
			<article>
				<h3>A propos de moi</h3>
				<div class="moi fl-l"></div>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue purus nec enim viverra feugiat. Nunc hendrerit sodales ultricies. In lacinia erat dolor, sit amet ultricies eros laoreet et. Integer vel lectus metus. Nunc eleifend sodales sapien, viverra facilisis orci tempus quis. Quisque vulputate dolor ac luctus lobortis. Duis rhoncus neque congue purus dapibus bibendum. Ut congue nulla sit amet turpis feugiat scelerisque. Aenean malesuada diam non ante feugiat, id ullamcorper risus sodales. Praesent dictum libero ac ipsum tempus tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse pretium ligula mi, ac hendrerit purus sagittis in. Mauris dictum convallis lobortis. </p>
				<p> Phasellus sed fermentum tortor. Ut malesuada nec risus sit amet facilisis. Aliquam cursus leo vitae ligula tristique, a feugiat augue molestie. Aenean erat quam, sagittis euismod mauris eu, luctus auctor tellus. Maecenas id nibh arcu. Donec vel consectetur orci. Nullam convallis a felis sit amet elementum. Pellentesque quam sem, pretium sed nisl et, lacinia laoreet turpis. Nunc et ultricies purus, vel sollicitudin turpis. Pellentesque mattis diam vel tortor cursus sodales. Nullam eu turpis fringilla, placerat risus nec, imperdiet ante. </p>
			</article>
		</section>
	</main>
	<?php
		include("../bdd/footer.php");
	?>
</body>
</html>