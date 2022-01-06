-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 05 jan. 2022 à 11:52
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `portfolio`
--

-- --------------------------------------------------------

--
-- Structure de la table `accueil`
--

DROP TABLE IF EXISTS `accueil`;
CREATE TABLE IF NOT EXISTS `accueil` (
  `id_unique` int(11) NOT NULL AUTO_INCREMENT,
  `en` text NOT NULL,
  `fr` text NOT NULL,
  PRIMARY KEY (`id_unique`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `accueil`
--

INSERT INTO `accueil` (`id_unique`, `en`, `fr`) VALUES
(1, 'Download', 'Télécharger'),
(2, 'my resume', ' mon CV');

-- --------------------------------------------------------

--
-- Structure de la table `footer`
--

DROP TABLE IF EXISTS `footer`;
CREATE TABLE IF NOT EXISTS `footer` (
  `id_unique` int(11) NOT NULL AUTO_INCREMENT,
  `en` text NOT NULL,
  `fr` text NOT NULL,
  PRIMARY KEY (`id_unique`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `footer`
--

INSERT INTO `footer` (`id_unique`, `en`, `fr`) VALUES
(1, 'Select a language', 'Langue'),
(2, 'French', ' Français'),
(3, 'English', ' Anglais'),
(4, 'Legal Notice', 'Mentions Légales');

-- --------------------------------------------------------

--
-- Structure de la table `presentation`
--

DROP TABLE IF EXISTS `presentation`;
CREATE TABLE IF NOT EXISTS `presentation` (
  `id_unique` int(11) NOT NULL AUTO_INCREMENT,
  `en` text NOT NULL,
  `fr` text NOT NULL,
  PRIMARY KEY (`id_unique`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `presentation`
--

INSERT INTO `presentation` (`id_unique`, `en`, `fr`) VALUES
(1, 'Who am I?', 'Qui suis-je ?'),
(2, 'About me', 'À propos de moi'),
(3, 'Junior web developer, I\'m currently in a professional license IMApp and in parallel enrolled in the training of webdesigner of the online school ESECAD. I like backend and frontend development.', 'Développeur web junior, je suis actuellement en licence professionnelle IMApp et en parallèle inscrit à la formation de webdesigner de l\'école en ligne ESECAD. J\'aime le développement backend et frontend.'),
(4, 'I can be defined as fall and responsible. My hobbies are :', 'On peut me définir comme étant automne et responsable. Mes hobbies sont :');

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

DROP TABLE IF EXISTS `projet`;
CREATE TABLE IF NOT EXISTS `projet` (
  `id_unique` int(11) NOT NULL AUTO_INCREMENT,
  `titre` text NOT NULL,
  `outil` text NOT NULL,
  PRIMARY KEY (`id_unique`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id_unique`, `titre`, `outil`) VALUES
(1, 'Forum RP', 'HTML CSS JS PHP SQL'),
(2, 'Portfolio', 'HTML CSS JS PHP SQL Photoshop'),
(3, 'Cubesate', 'Arduino c++ base de donnée SQL');

-- --------------------------------------------------------

--
-- Structure de la table `realisation_descript`
--

DROP TABLE IF EXISTS `realisation_descript`;
CREATE TABLE IF NOT EXISTS `realisation_descript` (
  `id_unique` int(11) NOT NULL AUTO_INCREMENT,
  `en` text NOT NULL,
  `fr` text NOT NULL,
  PRIMARY KEY (`id_unique`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `realisation_descript`
--

INSERT INTO `realisation_descript` (`id_unique`, `en`, `fr`) VALUES
(1, 'Realization of a site, putting into practice all the knowledge acquired during the license. Objective of the site to make a forum like a role play.', 'Réalisation d’un site mettant en pratique l’ensemble des connaissances acquise pendant la licence. Objectif du site faire un forum à l’image d’un role play (jeux de rôle).'),
(2, 'Creation of a Portfolio, a responsive CV site, meeting W3C standards and putting into practice all the knowledge acquired during the first semester of the LP IMApp.', 'Réalisation d’un Portfolio, site CV responsive, répondant aux normes W3C, sans usage de bibliothèque et pratique l’ensemble des connaissances acquise pendant le 1er semestre de la LP IMApp.'),
(3, 'Realization of a nano-satellite whose objective was to be sent in space and to ensure a hertzian and optical communication. The objective was divided into 6 parts, including 6 teams. Our satellite \"sensors\" team had to provide, a printed map made up of the satellite sensors (temperature, GPS ...) all the data was then stored in a database and displayed on a web page.', 'Réalisation d\'un nano-satellite dont l\'objectif était d\'être envoyé dans l\'espace et d\'assurer une communication hertzienne et optique. L\'objectif était divisé en 6 parties, comprenant 6 équipes. Notre équipe capteurs du satellite devait fournir une carte imprimer constitué des capteurs du satellite (température, GPS ...) l\'ensemble des données était ensuite stockée dans une base de données puis affichée sur une page web.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
