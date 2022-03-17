<?php
	$credentials = fopen($_SERVER["DOCUMENT_ROOT"] . "/portfolio/config.csv", "r"); //chez moi c /Portfolio en plus

	if ($credentials)
	{
		// On vérifie si le fichier de configuration existe.
		$credentials = fgetcsv($credentials);
	}

	$host = $credentials[0];    // Adresse de la base de données (par défaut : "localhost")
	$db   = $credentials[1];    // Nom de la base de données (par défaut : "porfolio_2")
	$user = $credentials[2];    // Identifiant de connexion (par défaut : "root")
	$pass = $credentials[3];    // Mot de passe de connexion (par défaut : "")
	$charset = $credentials[4]; // Encodage des caractères (par défaut : "utf8")
	$port = $credentials[5];    // Port de connexion (par défaut : "3306" sur MySQL et "3307" sur MariaDB)Z
		
	try {   /* Utilisation du module PDO (Php Data Objects) 
		cf. openclassrooms.com/courses/concevez-votre-site-web-avec-php-et-mysql/lire-des-donnees-2 qui propose sous forme objet (une classe) un ensemble complet
		de méthodes de manipulation des BdD et de leurs tables
		A changer :
			- le nom de la BDD : écrit sur le format portfolio2019-2020_xxx où xxx correspond à votre nom
			- le passwd : vide '' pour Windows et 'root' pour OSX
		*/
		$bdd = new PDO("mysql:host=$host;dbname=$db;charset=$charset;port=3306", 'root', '');
	}
	catch (Exception $e) {
		die('Erreur : ' . $e->getMessage());
	}


	function getPDO()
	{	
		global $credentials;
		$host = $credentials[0];    // Adresse de la base de données (par défaut : "localhost")
		$db   = $credentials[1];    // Nom de la base de données (par défaut : "porfolio_2")
		$user = $credentials[2];    // Identifiant de connexion (par défaut : "root")
		$pass = $credentials[3];    // Mot de passe de connexion (par défaut : "")
		$charset = $credentials[4]; // Encodage des caractères (par défaut : "utf8")
		$port = $credentials[5];    // Port de connexion (par défaut : "3306" sur MySQL et "3307" sur MariaDB)Z
		
		$dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=$port";
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


	// Récup les infos utilie a la persentaion du steven

	function my_moi($pdo, $lang)
	{
		return $pdo->query("SELECT `$lang` FROM `presentation`;")->fetchAll();
	}


	function etude($pdo)
	{
		return $pdo->query("SELECT * FROM etude
		ORDER BY `etu_id`,
		  CASE `type_info`
			WHEN 'date' THEN 1
			WHEN 'titre' THEN 2
			WHEN 'lieu' THEN 3
			WHEN 'descript' THEN 4
			WHEN 'en_plus' THEN 5
			ELSE 6
		  END;
		")->fetchAll();
	}


	// fonction pour recup les projets en fonction de la langue.

	function projet($pdo)
	{
		return $pdo->query("SELECT * FROM `projet` WHERE 1;")->fetchAll();
	}

	function voirprojet($pdo)
	{
		return $pdo->query("SELECT * FROM `voir_projet` WHERE 1 ;")->fetchAll();
	}

		// Récup les infos page contact

	function contact($pdo, $lang)
	{
		return $pdo->query("SELECT `$lang` FROM `contact`;")->fetchAll();
	}

	function text_etude($pdo, $lang)
	{
		return $pdo->query("SELECT `$lang` FROM `text_etude`;")->fetchAll();
	}

?>