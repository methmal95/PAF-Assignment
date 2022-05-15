-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2022 at 09:01 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gridmanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `powergrid`
--

CREATE TABLE `powergrid` (
  `id` int(11) NOT NULL,
  `source` varchar(100) DEFAULT NULL,
  `area` varchar(100) DEFAULT NULL,
  `gridCode` varchar(45) DEFAULT NULL,
  `output` varchar(45) DEFAULT NULL,
  `station` varchar(45) DEFAULT NULL,
  `operator` varchar(45) DEFAULT NULL,
  `engineer` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `powergrid`
--

INSERT INTO `powergrid` (`id`, `source`, `area`, `gridCode`, `output`, `station`, `operator`, `engineer`) VALUES
(1, 'asssss', 'kottawa', 'dddd', 'ddddd', 'ddddd', 'ddddd', 'ddddd'),
(3, 'aa', 'aaaaaaa', 'aaaa', 'aaaaaaa', 'qqq', 'qqqqq', 'qqqqqqqq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `powergrid`
--
ALTER TABLE `powergrid`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `powergrid`
--
ALTER TABLE `powergrid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
