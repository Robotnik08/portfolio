-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2024 at 11:33 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_link` varchar(255) NOT NULL,
  `github_link` varchar(255) NOT NULL,
  `demo_link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `image_link`, `github_link`, `demo_link`) VALUES
(1, 'Dosato', 'Dosato is a custom, serious programming language; it\'s quite robust and has a lot of functionality. I created this language to delve deeper into how programming languages function at their core. This isn\'t just a tiny language; it\'s a fully-fledged, actual programming language utilizing all the practices real languages employ, including a tokenizer, AST parser, and more. I built it entirely in C as well, without relying on any external libraries. This endeavor tested my knowledge of low-level programming and memory management, truly pushing my understanding of programming in general.', 'dosato.png', 'https://github.com/Robotnik08/dosato', 'none'),
(2, 'Skills heroes', 'I participated in the official \"Skills Heroes MBO vakwedstrijd\" as a web developer. After making it to the finals, I earned 3rd place, securing a bronze medal and making me the <a href=\"https://worldskillsnetherlands.nl/stf/uitslagen/skills-heroes\" class=\"link\">third best webdeveloper student in the Netherlands</a>. Below are the links to the products I had to create for the finals. I had only about 7 hours for the API and the website, while the game was built in 4 hours. This is truly when I realised that I have a true talent for development.\n\n\n\n\n\n\n', 'bronze_medal.jpg', 'https://github.com/Robotnik08/skill-heroes', 'none'),
(3, 'Breadboard computer', 'I am currently working on building a Turing-complete 8-bit breadboard computer, constructed with simple logic ICs. I have designed the entire computer in a simulator and am currently building it in real life using a solderless breadboard. Additionally, I\'ve designed my own instruction set and assembly language that works on my architecture. The image shows the schematic; each node represents 1 IC, and all ICs are simple logic ICs, with no shortcuts.\n\nThis project is my first venture into Computer Engineering and CPU architecture.\n\n\n\n', 'breadboard.png', 'none', 'none'),
(4, 'JavaScript Chess Robot', 'This is my first major venture into more advanced projects. As an enthusiast of chess, I thought it would be fun to create a chess robot, and a strong one at that. I coded the entirety of chess and then built the bot from the ground up, researching algorithms and chess programming along the way. <br><span id=\"chesstip\" class=\"highlight\"><strong>\"Can you beat him?\"</strong></span>', 'chess.png', 'https://github.com/Robotnik08/ChessRobot', './chess'),
(6, 'Slome', '\"Slome\" is an indie game I\'ve been developing for the past 3 years. Created in Unity, it has been instrumental in honing my object-oriented programming skills and proficiency in C#. Currently, the game is in closed beta testing. I serve as the lead developer on the Slome Dev team and also co-manage the team, which consists of 8 members. Press the \"Demo\" button to be redirected to our Discord server for more information.', 'slome.png', 'none', 'https://discord.gg/mp3HkYFQtC'),
(7, 'Advent Of Code 2023', 'I didn\'t manage to complete Advent of Code 2023 this year, but I did complete 7 days, with a twist! I tackled each challenge using my own programming language (Dosato), effectively showcasing its capabilities.', 'advent.png', 'https://github.com/Robotnik08/adventofcode2023', 'none'),
(8, 'SlomeJS', 'Considering this as a Slome spinoff, SlomeJS is built on vanilla JS with my custom-made game engine. This project showcases peak code aesthetics, employing OOP in JS perfectly and implementing effective systems to handle online multiplayer using Socket.IO. Unfortunately, since the game uses online multiplayer, I cannot provide a live demo here. If you are curious, go to my github and locally install the server.\r\n\r\n\r\n\r\n\r\n\r\n', 'slomejs.png', 'https://github.com/Robotnik08/SlomeJS-2', 'none'),
(9, 'Annex API', 'This is my first time building a proper REST API, complete with security and rate limiting. This API also adheres to the correct HTTP responses and functions as a professional-grade REST API. I developed this project as part of a team effort for a school project.', 'annex-api.png', 'https://github.com/Robotnik08/annex-API', 'none'),
(10, 'Discord bots', 'I have experience in building Discord bots and utilizing the Discord API. Additionally, I have employed the Open AI API to bring my bots to life.', 'bot.png', 'none', 'https://discord.gg/mp3HkYFQtC'),
(11, 'Raycaster', 'This raycaster was build entirely in C using SDL to render the graphics. The math was written by me and I researched this topic a lot. This is also my first real experience with the C programming language.', 'raycaster.png', 'https://github.com/Robotnik08/raycaster', 'none'),
(12, 'ThreeJS voxel game', 'A Minecraft-like clone made with Three.js, featuring 3D Perlin noise generation developed by me. This project marks my first experience with Three.js.', 'voxel.png', 'https://github.com/Robotnik08/Voxellar', '/voxel'),
(13, 'Particle Life', 'One of my earliest JavaScript projects, this simulation models particles interacting with each other based on given rules. It\'s versatile, allowing users to create fascinating machines, some resembling life itself. (You could liken it to the Game of Life in a way.) This was never truly finished, but the demo does show a cool \"creature\" I made.', 'particle.png', 'https://github.com/Robotnik08/Particle-Life', '/particle'),
(14, 'Roman Numerals', 'I made this in a couple of hours in C when I was in Rome. I was interested in making a Roman numerals parser. I made it in C to exercise my knowledge and to pass the time a bit.\r\n\r\n\r\n\r\n\r\n\r\n', 'roman.png', 'https://github.com/Robotnik08/RomanNumeralsParser', 'none'),
(15, 'Infini Balls', 'This app showcases my fully coded physics engine, accurately simulating realistic ball physics. On mobile devices, it utilizes the gyroscope to adjust gravity.\r\n\r\n\r\n\r\n\r\n\r\n\r\n', 'infini.png', 'https://github.com/Robotnik08/InfiniBalls', 'https://infini-balls-g64w.vercel.app/'),
(16, 'Evo Civ', 'Although this project isn\'t yet finished, it serves as a solid demonstration of handling tile-based games in JavaScript. I devised the systems independently, a fact of which I\'m proud. Many of these systems are reused in SlomeJS, further validating their effectiveness and utility.', 'evociv.png', 'https://github.com/Robotnik08/SlomeVerse', 'none'),
(17, 'Cell Sim', 'Made in a few hours to test some idea I had, it came out pretty nicely. One of my first JavaScript apps. Coincidentally, I decided to use this in the background of this page!', 'cell.png', 'https://github.com/Robotnik08/CellSimulation', '/cell'),
(1000, 'This website', 'This website was entirely crafted by me, with the majority of the code being written solely by myself. All visual backgrounds, styling ideas, and other visual aspects were created by me using vanilla HTML, CSS, and JavaScript. Creative coding and crafting visually appealing content are hobbies of mine, so I have extensive experience in producing stunning visuals using only the basics!', 'none', 'none', 'none');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1012;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
