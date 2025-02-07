-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2025 at 08:17 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `d66070286`
--

-- --------------------------------------------------------

--
-- Table structure for table `advisor`
--

CREATE TABLE `advisor` (
  `s_ID` varchar(10) NOT NULL,
  `i_ID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `advisor`
--

INSERT INTO `advisor` (`s_ID`, `i_ID`) VALUES
('00128', '45565'),
('12345', '10101'),
('23121', '76543'),
('44553', '22222'),
('45678', '22222'),
('76543', '45565'),
('76653', '98345'),
('98765', '98345'),
('98988', '76766');

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `artist_id` bigint(20) NOT NULL,
  `artist_name` text NOT NULL,
  `createAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`artist_id`, `artist_name`, `createAt`) VALUES
(1, 'BNK48', '2024-09-02 02:46:37'),
(2, 'CGM48', '2024-09-02 02:46:42'),
(3, 'QRRA', '2024-09-02 02:50:11'),
(4, 'eRAA', '2024-09-02 02:50:20'),
(5, 'INDYCAMP', '2024-09-02 02:51:32');

-- --------------------------------------------------------

--
-- Table structure for table `classroom`
--

CREATE TABLE `classroom` (
  `building` varchar(50) NOT NULL,
  `room_number` int(11) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `classroom`
--

INSERT INTO `classroom` (`building`, `room_number`, `capacity`) VALUES
('Packard', 101, 500),
('Painter', 514, 10),
('Taylor', 3128, 70);

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` varchar(10) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `dept_name` varchar(50) DEFAULT NULL,
  `credits` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `title`, `dept_name`, `credits`) VALUES
('BIO-101', 'Intro. to Biology', 'Biology', 4),
('BIO-301', 'Genetics', 'Biology', 4),
('BIO-399', 'Computational Biology', 'Biology', 3),
('CS-101', 'Intro. to Computer Science', 'Comp. Sci.', 4),
('CS-190', 'Game Design', 'Comp. Sci.', 4),
('CS-315', 'Robotics', 'Comp. Sci.', 3),
('CS-319', 'Image Processing', 'Comp. Sci.', 3),
('CS-347', 'Database System Concepts', 'Comp. Sci.', 3),
('EE-181', 'Intro. to Digital Systems', 'Elec. Eng.', 3),
('FIN-201', 'Investment Banking', 'Finance', 3),
('HIS-351', 'World History', 'History', 3),
('MU-199', 'Music Video Production', 'Music', 3),
('PHY-101', 'Physical Principles', 'Physics', 4);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_name` varchar(50) NOT NULL,
  `building` varchar(50) DEFAULT NULL,
  `budget` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_name`, `building`, `budget`) VALUES
('Biology', 'Watson', 90000.00),
('Comp. Sci.', 'Taylor', 100000.00),
('Elec. Eng', 'Taylor', 85000.00),
('Finance', 'Painter', 120000.00),
('History', 'Painter', 50000.00),
('Music', 'Packard', 80000.00),
('Physics', 'Watson', 70000.00);

-- --------------------------------------------------------

--
-- Table structure for table `instructor`
--

CREATE TABLE `instructor` (
  `ID` varchar(10) NOT NULL,
  `name` varchar(15) NOT NULL,
  `dept_name` varchar(20) NOT NULL,
  `salary` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `instructor`
--

INSERT INTO `instructor` (`ID`, `name`, `dept_name`, `salary`) VALUES
('10101', 'Srinivasan', 'Comp. Sci.', 65000),
('12121', 'Wu', 'Finance', 90000),
('15151', 'Mozart', 'Music', 40000),
('22222', 'Einstein', 'Physics', 95000),
('32343', 'El Said', 'History', 60000),
('33456', 'Gold', 'Physics', 87000),
('45565', 'Katz', 'Comp. Sci.', 75000),
('58583', 'Califieri', 'History', 62000),
('76543', 'Singh', 'Finance', 80000),
('76766', 'Crick', 'Biology', 72000),
('83821', 'Brandt', 'Comp. Sci.', 92000),
('98345', 'Kim', 'Elec. Eng.', 80000);

-- --------------------------------------------------------

--
-- Table structure for table `prereq`
--

CREATE TABLE `prereq` (
  `course_id` varchar(10) NOT NULL,
  `prereq_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `course_id` varchar(10) NOT NULL,
  `sec_id` varchar(10) NOT NULL,
  `semester` varchar(6) NOT NULL,
  `year` int(11) NOT NULL,
  `building` varchar(50) DEFAULT NULL,
  `room_number` varchar(10) DEFAULT NULL,
  `time_slot_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`course_id`, `sec_id`, `semester`, `year`, `building`, `room_number`, `time_slot_id`) VALUES
('BIO-101', '1', 'Summer', 2017, 'Painter', '514', 'B'),
('BIO-301', '1', 'Summer', 2018, 'Painter', '514', 'A'),
('CS-101', '1', 'Fall', 2017, 'Packard', '101', 'H'),
('CS-101', '1', 'Spring', 2018, 'Packard', '101', 'F'),
('CS-190', '1', 'Spring', 2017, 'Taylor', '3128', 'E'),
('CS-190', '2', 'Spring', 2017, 'Taylor', '3128', 'A'),
('CS-315', '1', 'Spring', 2018, 'Watson', '120', 'D'),
('CS-319', '1', 'Spring', 2018, 'Watson', '100', 'B'),
('CS-319', '2', 'Spring', 2018, 'Taylor', '3128', 'C'),
('CS-347', '1', 'Fall', 2017, 'Taylor', '3128', 'A'),
('EE-181', '1', 'Spring', 2017, 'Taylor', '3128', 'C'),
('FIN-201', '1', 'Spring', 2018, 'Packard', '101', 'B'),
('HIS-351', '1', 'Spring', 2018, 'Painter', '514', 'C'),
('MU-199', '1', 'Spring', 2018, 'Packard', '101', 'D'),
('PHY-101', '1', 'Fall', 2017, 'Watson', '100', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `song_id` bigint(20) NOT NULL,
  `song_name` text NOT NULL,
  `song_release_date` datetime NOT NULL,
  `song_type` varchar(20) NOT NULL,
  `artist` bigint(20) NOT NULL,
  `createAt` int(11) NOT NULL,
  `updateAt` int(11) NOT NULL,
  `deleteAt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`song_id`, `song_name`, `song_release_date`, `song_type`, `artist`, `createAt`, `updateAt`, `deleteAt`) VALUES
(1, 'BORDERLESS', '2024-07-20 00:00:00', 'SINGLE', 1, 1725246094, 1725246094, NULL),
(2, 'Sayonara Crawl', '2024-02-15 00:00:00', 'SINGLE', 1, 1725246094, 1725246094, NULL),
(3, 'Mirai to wa', '2023-09-10 00:00:00', 'COUPLING SINGLE', 1, 1725246094, 1725246094, NULL),
(4, 'Namo Ha Mo Rumor', '2023-05-20 00:00:00', 'DIGITAL RELEASE', 1, 1725246094, 1725246094, NULL),
(5, 'Heavy Rotation', '2023-01-25 00:00:00', 'SINGLE', 1, 1725246094, 1725246094, NULL),
(6, 'Chiang Mai 106', '2024-06-10 00:00:00', 'SINGLE', 2, 1725246166, 1725246166, NULL),
(7, 'Melon Juice', '2024-02-01 00:00:00', 'SINGLE', 2, 1725246166, 1725246166, NULL),
(8, 'Zetsumetsu Kurokami Shoujo', '2023-10-15 00:00:00', 'COUPLING SINGLE', 2, 1725246166, 1725246166, NULL),
(9, 'Pinocchio Gun', '2023-07-25 00:00:00', 'DIGITAL RELEASE', 2, 1725246166, 1725246166, NULL),
(10, 'Seishun no Lap Time', '2023-03-10 00:00:00', 'SINGLE', 2, 1725246166, 1725246166, NULL),
(11, 'Sunshine', '2024-01-10 00:00:00', 'SINGLE', 4, 1725246191, 1725246191, NULL),
(12, 'Dream On', '2024-02-15 00:00:00', 'COUPLING SINGLE', 4, 1725246191, 1725246191, NULL),
(13, 'Rise Up', '2024-03-20 00:00:00', 'ALBUM', 4, 1725246191, 1725246191, NULL),
(14, 'Starlight', '2024-04-25 00:00:00', 'SINGLE', 4, 1725246191, 1725246191, NULL),
(15, 'Begin Again', '2024-05-30 00:00:00', 'COUPLING SINGLE', 4, 1725246191, 1725246191, NULL),
(16, 'Echoes of Tomorrow', '2024-01-15 00:00:00', 'SINGLE', 3, 1725246251, 1725246251, NULL),
(17, 'Whispering Dreams', '2024-02-20 00:00:00', 'DIGITAL RELEASE', 3, 1725246251, 1725246251, NULL),
(18, 'Pathfinder', '2024-03-25 00:00:00', 'SINGLE', 3, 1725246251, 1725246251, NULL),
(19, 'Chasing Shadows', '2024-04-30 00:00:00', 'DIGITAL RELEASE', 3, 1725246251, 1725246251, NULL),
(20, 'Eternal Flame', '2024-05-05 00:00:00', 'SINGLE', 3, 1725246251, 1725246251, NULL),
(21, 'Freedom March', '2024-01-05 00:00:00', 'SINGLE', 5, 1725246302, 1725246302, NULL),
(22, 'Rebel Heart', '2024-02-10 00:00:00', 'COUPLING SINGLE', 5, 1725246302, 1725246302, NULL),
(23, 'Wild Spirit', '2024-03-15 00:00:00', 'SINGLE', 5, 1725246302, 1725246302, NULL),
(24, 'Break the Chains', '2024-04-20 00:00:00', 'ALBUM', 5, 1725246302, 1725246302, NULL),
(25, 'Rise of the Phoenix', '2024-05-25 00:00:00', 'ALBUM', 5, 1725246302, 1725246302, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `ID` varchar(10) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `dept_name` varchar(50) DEFAULT NULL,
  `tot_cred` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`ID`, `name`, `dept_name`, `tot_cred`) VALUES
('00128', 'Zhang', 'Comp. Sci.', 102),
('12345', 'Shankar', 'Comp. Sci.', 32),
('19991', 'Brandt', 'History', 80),
('23121', 'Chavez', 'Finance', 110),
('44553', 'Peltier', 'Physics', 56),
('45678', 'Levy', 'Physics', 46),
('54321', 'Williams', 'Comp. Sci.', 54),
('55739', 'Sanchez', 'Music', 38),
('70557', 'Snow', 'Physics', 0),
('76543', 'Brown', 'Comp. Sci.', 58),
('76653', 'Aoi', 'Elec. Eng.', 60),
('98765', 'Bourikas', 'Elec. Eng.', 98),
('98988', 'Tanaka', 'Biology', 120);

-- --------------------------------------------------------

--
-- Table structure for table `takes`
--

CREATE TABLE `takes` (
  `ID` varchar(10) NOT NULL,
  `course_id` varchar(10) NOT NULL,
  `sec_id` varchar(10) NOT NULL,
  `semester` varchar(6) NOT NULL,
  `year` int(11) NOT NULL,
  `grade` char(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `takes`
--

INSERT INTO `takes` (`ID`, `course_id`, `sec_id`, `semester`, `year`, `grade`) VALUES
('00128', 'CS-101', '1', 'Fall', 2017, 'A'),
('00128', 'CS-347', '1', 'Fall', 2017, 'A-'),
('12345', 'CS-101', '1', 'Fall', 2017, 'C'),
('12345', 'CS-190', '2', 'Spring', 2017, 'A'),
('12345', 'CS-315', '1', 'Spring', 2018, 'A'),
('12345', 'CS-347', '1', 'Fall', 2017, 'A'),
('19991', 'HIS-351', '1', 'Spring', 2018, 'B'),
('23121', 'FIN-201', '1', 'Spring', 2018, 'C+'),
('44553', 'PHY-101', '1', 'Fall', 2017, 'B-'),
('45678', 'CS-101', '1', 'Fall', 2017, 'F'),
('45678', 'CS-101', '1', 'Spring', 2018, 'B+'),
('45678', 'CS-319', '1', 'Spring', 2018, 'B'),
('54321', 'CS-101', '1', 'Fall', 2017, 'A-'),
('54321', 'CS-190', '2', 'Spring', 2017, 'B+'),
('55739', 'MU-199', '1', 'Spring', 2018, 'A-'),
('76543', 'CS-101', '1', 'Fall', 2017, 'A'),
('76543', 'CS-319', '2', 'Spring', 2018, 'A'),
('76653', 'EE-181', '1', 'Spring', 2017, 'C'),
('98765', 'CS-101', '1', 'Fall', 2017, 'C-'),
('98765', 'CS-315', '1', 'Spring', 2018, 'B'),
('98988', 'BIO-101', '1', 'Summer', 2017, 'A'),
('98988', 'BIO-301', '1', 'Summer', 2018, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `teaches`
--

CREATE TABLE `teaches` (
  `ID` varchar(10) NOT NULL,
  `course_id` varchar(15) NOT NULL,
  `sec_id` varchar(5) NOT NULL,
  `semester` varchar(5) NOT NULL,
  `year` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `teaches`
--

INSERT INTO `teaches` (`ID`, `course_id`, `sec_id`, `semester`, `year`) VALUES
('10101', 'CS-101', '1', 'Fall', '2017'),
('12121', 'FIN-201', '1', 'Sprin', '2018'),
('15151', 'MU-199', '1', 'Sprin', '2018'),
('22222', 'PHY-101', '1', 'Fall', '2017'),
('32343', 'HIS-351', '1', 'Sprin', '2018'),
('45565', 'CS-319', '1', 'Sprin', '2018'),
('76766', 'BIO-101', '1', 'Summe', '2017'),
('83821', 'CS-190', '2', 'Sprin', '2017'),
('98345', 'EE-181', '1', 'Sprin', '2017');

-- --------------------------------------------------------

--
-- Table structure for table `time_slot`
--

CREATE TABLE `time_slot` (
  `time_slot_id` varchar(10) NOT NULL,
  `day` varchar(3) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advisor`
--
ALTER TABLE `advisor`
  ADD PRIMARY KEY (`s_ID`);

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`artist_id`);

--
-- Indexes for table `classroom`
--
ALTER TABLE `classroom`
  ADD PRIMARY KEY (`building`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `dept_name` (`dept_name`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_name`);

--
-- Indexes for table `instructor`
--
ALTER TABLE `instructor`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `prereq`
--
ALTER TABLE `prereq`
  ADD PRIMARY KEY (`course_id`,`prereq_id`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`course_id`,`sec_id`,`semester`,`year`);

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`song_id`),
  ADD KEY `artist` (`artist`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `takes`
--
ALTER TABLE `takes`
  ADD PRIMARY KEY (`ID`,`course_id`,`sec_id`,`semester`,`year`);

--
-- Indexes for table `time_slot`
--
ALTER TABLE `time_slot`
  ADD PRIMARY KEY (`time_slot_id`,`day`,`start_time`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`artist`) REFERENCES `artists` (`artist_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
