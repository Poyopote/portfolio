-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 13 jan. 2022 à 16:06
-- Version du serveur :  5.7.17
-- Version de PHP :  5.6.30

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

CREATE TABLE `accueil` (
  `id_unique` int(11) NOT NULL,
  `en` text NOT NULL,
  `fr` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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

CREATE TABLE `contact` (
  `id_unique` int(11) NOT NULL,
  `en` text NOT NULL,
  `fr` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
-- Structure de la table `ecole`
--

CREATE TABLE `ecole` (
  `id_unique` int(11) NOT NULL,
  `en` text NOT NULL,
  `fr` text NOT NULL,
  `type` enum('date','titre','lieu','descri','bonus') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ecole`
--

INSERT INTO `ecole` (`id_unique`, `en`, `fr`, `type`) VALUES
(1, '2021 to present', '2021 &agrave; maintenant', 'date'),
(2, 'IMApp professional license', 'Licence professionnelle IMApp', 'titre'),
(3, 'Universit&eacute; C&ocirc;te d\'Azur Campus Carlone 98 bd Edouard Herriot BP 3209 06204 NICE Cedex 3', 'Universit&eacute; C&ocirc;te d\'Azur Campus Carlone 98 bd Edouard Herriot BP 3209 06204 NICE Cedex 3', 'lieu'),
(4, 'From its full name Licence Professionnelle M&eacute;tiers de l\'Informatique : applications web &quot;Informatique Multim&eacute;dia Appliqu&eacute;e&quot;. The LP IMApp is a diploma of professional insertion, to the professions of data processing like webmaster, integrator HTML/CSS and/or PHP, Ajax, multimedia developer, webdesigner, etc.', 'De son nom complet Licence Professionnelle M&eacute;tiers de l\'Informatique : applications web &quot;Informatique Multim&eacute;dia Appliqu&eacute;e&quot;. La LP IMApp est un dipl&ocirc;me d\'insertion professionnelle, aux m&eacute;tiers de l&rsquo;informatique comme webmaster, int&eacute;grateur HTML/CSS et/ou PHP, Ajax, d&eacute;veloppeur multim&eacute;dia, webdesigner, etc.', 'descri'),
(5, 'creation in PHP of sites valid to W3C (structure, accessibility) and International Law, design of ergonomic sites, development (AxureRP, HTML/CSS, Sass, Twig), design and creation of MySQL databases, JavaScript/Ajax scripts, creation and retouching of images on Photoshop, CMS (WordPress/Bolt), frameworks (jQuery, Bootstrap, Symfony)', 'cr&eacute;ation en PHP de sites valide au W3C (structure, accessibilit&eacute;) et du Droit international, design de sites ergonomiques, d&eacute;veloppement (AxureRP, HTML/CSS, Sass, Twig), conception et la cr&eacute;ation de bases de donn&eacute;es MySQL, scripts JavaScript/Ajax, cr&eacute;ation et la retouche d\'images sur Photoshop, CMS (WordPress/Bolt), frameworks (jQuery, Bootstrap, Symfony)', 'bonus'),
(6, '2020 to present', '2020 &agrave; maintenant', 'date'),
(7, 'ESECAD - Webdesigner distance learning', 'ESECAD - Formations &agrave; distance Webdesigner', 'titre'),
(8, '85-87 Rue Gabriel P&eacute;ri, 92120 Montrouge', '85-87 Rue Gabriel P&eacute;ri, 92120 Montrouge', 'lieu'),
(9, 'ESECAD is a distance learning school specializing in training for web and business professions. The training gives the skills to produce: graphic design, interface design, computer languages, web project management ...', 'ESECAD est une &eacute;cole de formation &agrave; distance sp&eacute;cialiste de la formation aux m&eacute;tiers du web et du commerce. La formation donne les acquis pour produire : conception graphique, design d&rsquo;interfaces, langages informatiques, gestion de projet web&hellip;', 'descri'),
(10, 'Creation of logos, banners, posters and website interfaces using the graphic design software Photoshop and Illustrator, mastering the design of the web graphic charter, creating a web identity, practice of HTML 5 and CSS3, concept of user experience, principles of UX design and SEO.', 'Cr&eacute;ation de logo, de banni&egrave;re, affiches et interfaces de sites web &agrave; l&rsquo;aide des logiciels de conception graphique Photoshop et Illustrator, Ma&icirc;triser la conception de la charte graphique web, cr&eacute;er une identit&eacute; web,  pratique du HTML 5 et CSS3, notion d&rsquo;exp&eacute;rience utilisateur, principes de l&rsquo;UX design et SEO.', 'bonus'),
(11, '2018-2020', '2018-2020', 'date'),
(12, 'BTS SN option electronics and communication', 'BTS SN option &eacute;lectronique et communication', 'titre'),
(13, 'Lyc&eacute;e jules ferry 82 Bd de la R&eacute;publique, 06400 Cannes', 'Lyc&eacute;e jules ferry 82 Bd de la R&eacute;publique, 06400 Cannes', 'lieu'),
(14, 'A 2-year training course, training for the maintenance of electronic communication products. At the end of the training, the student knows how to propose hardware/software solutions based on the analysis of a specification. He/she performs numerous compliance tests and writes technical documentation. The option of the training gives him an apprenticeship of electronics (troubleshooting, creation of printed card, electrical assembly, soldering) and Web programming, language (C, HTML, CSS, Java, PHP, principle of data bases).  Translated with www.DeepL.com/Translator (free version)', 'Formation de 2 ans, formant &agrave; la maintenance de produits de communication &eacute;lectronique. &Agrave; la fin de la formation l\'&eacute;tudiant sait proposer des solutions mat&eacute;rielles/logicielle &agrave; partir de l\'analyse d\'un cahier des charges. Il r&eacute;alise de nombreux tests de conformit&eacute;s et r&eacute;dige une documentation technique. L\'option de la formation lui donne un apprentissage de l\'&eacute;lectronique (d&eacute;pannage, cr&eacute;ation de carte imprime, montage &eacute;lectrique, soudure) et de la programmation Web, langage (C, HTML, CSS, Java, PHP, principe des bases de donn&eacute;es.).', 'descri');

-- --------------------------------------------------------

--
-- Structure de la table `footer`
--

CREATE TABLE `footer` (
  `id_unique` int(11) NOT NULL,
  `en` text NOT NULL,
  `fr` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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

CREATE TABLE `presentation` (
  `id_unique` int(11) NOT NULL,
  `en` text NOT NULL,
  `fr` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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

CREATE TABLE `projet` (
  `id_unique` int(11) NOT NULL,
  `en` text NOT NULL,
  `fr` text NOT NULL,
  `type` enum('titre','techno','description','image','doc') NOT NULL,
  `projet_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
-- Structure de la table `voir_projet`
--

CREATE TABLE `voir_projet` (
  `id_unique` int(11) NOT NULL,
  `fichier` text NOT NULL,
  `type_fichier` enum('image','doc') NOT NULL,
  `ficher_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `voir_projet`
--

INSERT INTO `voir_projet` (`id_unique`, `fichier`, `type_fichier`, `ficher_id`) VALUES
(1, 'photomanipulation.jpg', 'image', 5),
(2, 'Homepage.jpg', 'image', 6),
(3, 'Page_galerie.jpg', 'image', 6),
(4, 'Story_Board.pdf', 'doc', 4),
(5, 'Portfolio.png', 'image', 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `accueil`
--
ALTER TABLE `accueil`
  ADD PRIMARY KEY (`id_unique`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id_unique`);

--
-- Index pour la table `ecole`
--
ALTER TABLE `ecole`
  ADD PRIMARY KEY (`id_unique`);

--
-- Index pour la table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id_unique`);

--
-- Index pour la table `presentation`
--
ALTER TABLE `presentation`
  ADD PRIMARY KEY (`id_unique`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`id_unique`);

--
-- Index pour la table `voir_projet`
--
ALTER TABLE `voir_projet`
  ADD PRIMARY KEY (`id_unique`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `accueil`
--
ALTER TABLE `accueil`
  MODIFY `id_unique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id_unique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `ecole`
--
ALTER TABLE `ecole`
  MODIFY `id_unique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT pour la table `footer`
--
ALTER TABLE `footer`
  MODIFY `id_unique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `presentation`
--
ALTER TABLE `presentation`
  MODIFY `id_unique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT pour la table `projet`
--
ALTER TABLE `projet`
  MODIFY `id_unique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `voir_projet`
--
ALTER TABLE `voir_projet`
  MODIFY `id_unique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
