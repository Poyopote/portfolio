-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 13 jan. 2022 à 21:01
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `portfolio`
--

-- --------------------------------------------------------

--
-- Structure de la table `accueil`
--

DROP TABLE IF EXISTS `accueil`;
CREATE TABLE IF NOT EXISTS `accueil` (
  `id_unique` int NOT NULL AUTO_INCREMENT,
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
-- Structure de la table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `id_unique` int NOT NULL AUTO_INCREMENT,
  `en` text NOT NULL,
  `fr` text NOT NULL,
  PRIMARY KEY (`id_unique`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id_unique`, `en`, `fr`) VALUES
(1, 'Contact form', 'Formulaire de contact'),
(2, 'Contact me at', 'Contactez-moi'),
(3, 'Your address', 'Votre adresse'),
(4, 'Your message', 'Votre message'),
(5, 'Send', 'Envoyer');

-- --------------------------------------------------------

--
-- Structure de la table `etude`
--

DROP TABLE IF EXISTS `etude`;
CREATE TABLE IF NOT EXISTS `etude` (
  `id_unique` int NOT NULL AUTO_INCREMENT,
  `en` text NOT NULL,
  `fr` text NOT NULL,
  `type_info` enum('date','titre','lieu','descript','en_plus') NOT NULL,
  `etu_id` int NOT NULL,
  PRIMARY KEY (`id_unique`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `etude`
--

INSERT INTO `etude` (`id_unique`, `en`, `fr`, `type_info`, `etu_id`) VALUES
(1, '2021 to present', '2021 &agrave; maintenant', 'date', 1),
(2, 'IMApp professional degree', 'Licence professionnelle IMApp', 'titre', 1),
(3, 'Universit&eacute; C&ocirc;te d\'Azur Campus Carlone 98 bd Edouard Herriot BP 3209 06204 NICE Cedex 3    ', 'Universit&eacute; C&ocirc;te d\'Azur Campus Carlone 98 bd Edouard Herriot BP 3209 06204 NICE Cedex 3', 'lieu', 1),
(4, 'From its full name: Licence Professionnelle M&eacute;tiers de l\'Informatique : applications web &quot;Informatique Multim&eacute;dia Appliqu&eacute;e&quot;. The LP IMApp is a diploma of professional insertion, to the professions of data processing like webmaster, integrator HTML/CSS and/or PHP, Ajax, multimedia developer, webdesigner, etc.', 'De son nom complet Licence Professionnelle M&eacute;tiers de l\'Informatique : applications web &quot;Informatique Multim&eacute;dia Appliqu&eacute;e&quot;. La LP IMApp est un dipl&ocirc;me d\'insertion professionnelle, aux m&eacute;tiers de l&rsquo;informatique comme webmaster, int&eacute;grateur HTML/CSS et/ou PHP, Ajax, d&eacute;veloppeur multim&eacute;dia, webdesigner, etc.', 'descript', 1),
(5, 'creation in PHP of websites valid to W3C (structure, accessibility) and international law, ergonomic website design, development (AxureRP, HTML/CSS, Sass, Twig), design and creation of MySQL databases, JavaScript/Ajax scripts, creation and retouching of images on Photoshop, CMS (WordPress/Bolt), frameworks (jQuery, Bootstrap, Symfony)', 'Cr&eacute;ation de logo, de banni&egrave;re, affiches et interfaces de sites web &agrave; l&rsquo;aide des logiciels de conception graphique Photoshop et Illustrator, Ma&icirc;triser la conception de la charte graphique web, cr&eacute;er une identit&eacute; web,  pratique du HTML 5 et CSS3, notion d&rsquo;exp&eacute;rience utilisateur, principes de l&rsquo;UX design et SEO.', 'en_plus', 1),
(6, '2020 to now', '2020 &agrave; maintenant', 'date', 2),
(10, '2018-2020', '2018-2020', 'date', 3),
(7, 'ESECAD - Webdesigner distance learning', 'ESECAD - Formations &agrave; distance Webdesigner', 'titre', 2),
(8, 'ESECAD is a distance learning school specializing in training for web and business professions. The training gives the skills to produce: graphic design, interface design, computer languages, web project management ...', 'ESECAD est une &eacute;cole de formation &agrave; distance sp&eacute;cialiste de la formation aux m&eacute;tiers du web et du commerce. La formation donne les acquis pour produire : conception graphique, design d&rsquo;interfaces, langages informatiques, gestion de projet web&hellip;', 'descript', 2),
(9, 'Creation of logo, banner, posters and website interfaces using graphic design software Photoshop and Illustrator, Mastering the design of the web graphic charter, creating a web identity, practice of HTML 5 and CSS3, concept of user experience, principles of UX design and SEO.', 'Cr&eacute;ation de logo, de banni&egrave;re, affiches et interfaces de sites web &agrave; l&rsquo;aide des logiciels de conception graphique Photoshop et Illustrator, Ma&icirc;triser la conception de la charte graphique web, cr&eacute;er une identit&eacute; web,  pratique du HTML 5 et CSS3, notion d&rsquo;exp&eacute;rience utilisateur, principes de l&rsquo;UX design et SEO.', 'en_plus', 2),
(11, 'BTS SN option electronics and communication', 'BTS SN option &eacute;lectronique et communication', 'titre', 3),
(12, 'Lyc&eacute;e jules ferry 82 Bd de la R&eacute;publique, 06400 Cannes', 'Lyc&eacute;e jules ferry 82 Bd de la R&eacute;publique, 06400 Cannes', 'lieu', 3),
(13, 'A 2-year course, training in the maintenance of electronic communication products. At the end of the training, the student knows how to propose hardware/software solutions based on the analysis of a specification. He/she performs numerous compliance tests and writes technical documentation. The option of the training gives him an apprenticeship of electronics (troubleshooting, creation of printed card, electrical assembly, soldering) and Web programming, language (C, HTML, CSS, Java, PHP, database foundation.)', 'Formation de 2 ans, formant &agrave; la maintenance de produits de communication &eacute;lectronique. &Agrave; la fin de la formation l\'&eacute;tudiant sait proposer des solutions mat&eacute;rielles/logicielle &agrave; partir de l\'analyse d\'un cahier des charges. Il r&eacute;alise de nombreux tests de conformit&eacute;s et r&eacute;dige une documentation technique. L\'option de la formation lui donne un apprentissage de l\'&eacute;lectronique (d&eacute;pannage, cr&eacute;ation de carte imprime, montage &eacute;lectrique, soudure) et de la programmation Web, langage (C, HTML, CSS, Java, PHP, fondement des bases de donn&eacute;es.).', 'descript', 3),
(14, '2019 ', '2019 ', 'date', 4),
(15, 'B1V electrical clearance', 'Habilitation &eacute;lectrique B1V', 'titre', 4),
(16, '2018', '2018 ', 'date', 5),
(17, 'Lyc&eacute;e jules ferry Cannes - Bac STI2D option SIN', 'Lyc&eacute;e jules ferry Cannes - Bac STI2D option SIN', 'titre', 5),
(18, 'Lyc&eacute;e jules ferry 82 Bd de la R&eacute;publique, 06400 Cannes', 'Lyc&eacute;e jules ferry 82 Bd de la R&eacute;publique, 06400 Cannes', 'lieu', 5),
(19, 'High school jules ferry 82 Bd de la R&eacute;publique, 06400 Cannes Named sciences and technologies of industry and sustainable development. Graduates have learned different methods to transmit information with the digital. This general and technological Bac leads thereafter on the fields: Sciences for the engineer, Electronics, Electrical energy, Civil engineering, Sciences and technologies.', 'Nomm&eacute; sciences et technologies de l\'industrie et du d&eacute;veloppement durable. Les &eacute;tudiants dipl&ocirc;m&eacute;s ont appris diff&eacute;rentes m&eacute;thodes pour transmettre de l\'information avec le num&eacute;rique. Ce  Bac g&eacute;n&eacute;ral et technologique dirige par la suite sur les domaines : Sciences pour l&rsquo;ing&eacute;nieur, &Eacute;lectronique, &Eacute;nergie &eacute;lectrique, G&eacute;nie civil, Sciences et technologies.', 'descript', 5),
(20, '85-87 Rue Gabriel P&eacute;ri, 92120 Montrouge', '85-87 Rue Gabriel P&eacute;ri, 92120 Montrouge', 'lieu', 2),
(21, 'Cannes', 'Cannes', 'lieu', 4);

-- --------------------------------------------------------

--
-- Structure de la table `footer`
--

DROP TABLE IF EXISTS `footer`;
CREATE TABLE IF NOT EXISTS `footer` (
  `id_unique` int NOT NULL AUTO_INCREMENT,
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
  `id_unique` int NOT NULL AUTO_INCREMENT,
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
(3, 'Web developer and junior web designer, I am currently in the IMApp profession license and in parallel registered in the Webdesigner training of the online school ESECAD. I enjoy backend and frontend development with a tendency towards design. I can be defined as being autumn and responsible. My interests are: drawing, art, music, piano, multimedia content creation (video, image, editing, etc.)', 'D&eacute;veloppeur web et webdesigner junior, je suis actuellement en licence professionnelle IMApp et en parall&egrave;le inscrit &agrave; la formation Webdesigner de l\'&eacute;cole en ligne ESECAD. J\'aime le d&eacute;veloppement backend et frontend avec une tendance pour le design. On peut me d&eacute;finir comme &eacute;tant automne et responsable. Mes centres d\'int&eacute;r&ecirc;t sont : le dessin, l\'art, la musique, le piano, la cr&eacute;ation de contenu multim&eacute;dia (vid&eacute;o, image, montage, etc.).'),
(4, 'I wish to specialize in web development and more particularly in web design, later I would like to be in the heart of web project putting into practice my knowledge in order to realize: graphic charter, editorial...', 'Je souhaite me sp&eacute;cialiser dans le d&eacute;veloppement web et plus particuli&egrave;rement dans le web design, par la suite j\'aimerais &ecirc;tre au c&oelig;ur du projet web en mettant en pratique mes connaissances afin de r&eacute;aliser : charte graphique, r&eacute;daction...');

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

DROP TABLE IF EXISTS `projet`;
CREATE TABLE IF NOT EXISTS `projet` (
  `id_unique` int NOT NULL AUTO_INCREMENT,
  `en` text NOT NULL,
  `fr` text NOT NULL,
  `type` enum('titre','techno','description','image','doc') NOT NULL,
  `projet_id` int NOT NULL,
  PRIMARY KEY (`id_unique`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id_unique`, `en`, `fr`, `type`, `projet_id`) VALUES
(1, 'Forum RP', 'Forum RP', 'titre', 1),
(2, 'HTML CSS JS PHP SQL', 'HTML CSS JS PHP SQL', 'techno', 1),
(3, 'Realization of a site, putting into practice all the knowledge acquired during the license. Objective of the site to make a forum like a role play.', 'R&eacute;alisation d&rsquo;un site mettant en pratique l&rsquo;ensemble des connaissances acquise pendant la licence. Objectif du site faire un forum &agrave; l&rsquo;image d&rsquo;un role play (jeux de r&ocirc;le).', 'description', 1),
(4, 'Portfolio', 'Portfolio', 'titre', 2),
(5, 'HTML CSS JS PHP SQL Photoshop', 'HTML CSS JS PHP SQL Photoshop', 'techno', 2),
(6, 'Creation of a Portfolio, a responsive CV site, meeting W3C standards and putting into practice all the knowledge acquired during the first semester of the LP IMApp.', 'R&eacute;alisation d&rsquo;un Portfolio, site CV responsive, r&eacute;pondant aux normes W3C, sans usage de biblioth&egrave;que et pratique l&rsquo;ensemble des connaissances acquise pendant le 1er semestre de la LP IMApp.', 'description', 2),
(7, 'Cubesat', 'Cubesat', 'titre', 3),
(8, 'Arduino c++ SQL database', 'Arduino c++ base de donn&eacute;e SQL', 'techno', 3),
(9, 'Realization of a nano-satellite whose objective was to be sent in space and to ensure a hertzian and optical communication. The objective was divided into 6 parts, including 6 teams. Our satellite &quot;sensors&quot; team had to provide, a printed map made up of the satellite sensors (temperature, GPS ...) all the data was then stored in a database and displayed on a web page.', 'R&eacute;alisation d\'un nano-satellite dont l\'objectif &eacute;tait d\'&ecirc;tre envoy&eacute; dans l\'espace et d\'assurer une communication hertzienne et optique. L\'objectif &eacute;tait divis&eacute; en 6 parties, comprenant 6 &eacute;quipes. Notre &eacute;quipe capteurs du satellite devait fournir une carte imprimer constitu&eacute; des capteurs du satellite (temp&eacute;rature, GPS ...) l\'ensemble des donn&eacute;es &eacute;tait ensuite stock&eacute;e dans une base de donn&eacute;es puis affich&eacute;e sur une page web.', 'description', 3),
(10, 'Study work (ESECAD): Story Board', 'Travail d&rsquo;&eacute;tude (ESECAD) : Story Board', 'titre', 4),
(11, 'Study work (ESECAD) : Photomanipulation - Photoshop', 'Travail d&rsquo;&eacute;tude (ESECAD) : Photomanipulation - Photoshop', 'titre', 5),
(12, 'Study work (ESECAD) : Homepage model - Photoshop', 'Travail d&rsquo;&eacute;tude (ESECAD) : Maquette homepage - Photoshop', 'titre', 6);

-- --------------------------------------------------------

--
-- Structure de la table `text_etude`
--

DROP TABLE IF EXISTS `text_etude`;
CREATE TABLE IF NOT EXISTS `text_etude` (
  `id_unique` int NOT NULL AUTO_INCREMENT,
  `fr` text NOT NULL,
  `en` text NOT NULL,
  PRIMARY KEY (`id_unique`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `text_etude`
--

INSERT INTO `text_etude` (`id_unique`, `fr`, `en`) VALUES
(1, 'Formation et dipl&ocirc;me', 'Training and Diploma'),
(2, 'Sommaire', 'Summary'),
(3, 'Objectif et avantages de la formation', 'Objective and benefits of the training'),
(4, 'Comp&eacute;tences pratiques', 'Practical competence');

-- --------------------------------------------------------

--
-- Structure de la table `voir_projet`
--

DROP TABLE IF EXISTS `voir_projet`;
CREATE TABLE IF NOT EXISTS `voir_projet` (
  `id_unique` int NOT NULL AUTO_INCREMENT,
  `fichier` text NOT NULL,
  `type_fichier` enum('image','doc') NOT NULL,
  `ficher_id` int NOT NULL,
  PRIMARY KEY (`id_unique`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `voir_projet`
--

INSERT INTO `voir_projet` (`id_unique`, `fichier`, `type_fichier`, `ficher_id`) VALUES
(1, 'photomanipulation.jpg', 'image', 5),
(2, 'Homepage.jpg', 'image', 6),
(3, 'Page_galerie.jpg', 'image', 6),
(4, 'Story_Board.pdf', 'doc', 4),
(5, 'Portfolio.png', 'image', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
