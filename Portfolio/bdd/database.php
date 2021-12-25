<?php
	function getPDO()
	{
		$host = 'localhost';
		$db   = 'portfolio';
		$user = 'root';
		$pass = '';
		$charset = 'utf8';
		
		$dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=3306";
		$options = [
			PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
			PDO::ATTR_EMULATE_PREPARES   => false,
		];
		try {
			return new PDO($dsn, $user, $pass, $options);
		} catch (\PDOException $e) {
			throw new \PDOException($e->getMessage(), (int)$e->getCode());
		}
	}

	// Page d'accueil du portfolio
	
	function home($pdo, $lang)
	{
		return $pdo->query("SELECT `$lang` FROM `accueil`;")->fetchAll();
	}

	// Footer pour chaque page

	function footer($pdo, $lang)
	{
		return $pdo->query("SELECT `$lang` FROM `footer`;")->fetchAll();
	}

	// fonction pour recup les projets en fonction de la langue.

	function projet()
	{
		return $pdo->query();
	}

	function projet_info($pdo, $lang)
	{
		return $pdo->query("SELECT `titre`, `outil`, `$lang`
		FROM `projet`
		INNER JOIN `realisation_descript`
		ON projet.unique_id = realisation_descript.unique_id;")->fetchAll();
	}

?>