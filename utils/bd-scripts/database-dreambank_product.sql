CREATE DATABASE  IF NOT EXISTS `database-dreambank` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `database-dreambank`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: database-bankofdream.cvcchelpilam.us-east-1.rds.amazonaws.com    Database: database-dreambank
-- ------------------------------------------------------
-- Server version	5.7.37-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` varchar(50) CHARACTER SET utf8 NOT NULL,
  `user_id` varchar(50) CHARACTER SET utf8 NOT NULL,
  `type` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `create_dt` datetime NOT NULL,
  `update_dt` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `product_user_id_idx` (`user_id`),
  CONSTRAINT `product_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('024ddcf1-f88e-4976-aab0-59b5dba71b19','f6bfbf30-231b-46eb-ad34-ff9646ca59af',3,2,'2022-05-10 15:42:28',NULL),('18820dff-75ba-4d79-8ae2-ff6f5d30f8bc','f6bfbf30-231b-46eb-ad34-ff9646ca59af',0,2,'2022-05-10 15:00:07',NULL),('4104001a-0366-4066-b3bc-a8d0b2a6c8d6','f6bfbf30-231b-46eb-ad34-ff9646ca59af',2,2,'2022-05-10 15:30:48',NULL),('68dd8c86-d591-4748-ac93-2421109c5a95','f6bfbf30-231b-46eb-ad34-ff9646ca59af',0,2,'2022-05-10 12:40:29',NULL),('a5b91e54-310d-49af-b7f7-897bdc0426b3','f6bfbf30-231b-46eb-ad34-ff9646ca59af',0,2,'2022-05-10 15:26:04',NULL),('ee97ad58-e019-4f1b-a609-47d40a28fe36','f6bfbf30-231b-46eb-ad34-ff9646ca59af',1,2,'2022-05-10 15:39:33',NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-10 20:53:01
