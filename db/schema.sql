-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'bikeLog'
--
-- ---
DROP DATABASE IF EXISTS bikeLog;

CREATE DATABASE bikeLog;

USE bikeLog

DROP TABLE IF EXISTS bikeLog;

CREATE TABLE bikeLog (
  id INTEGER AUTO_INCREMENT,
  date VARCHAR(30) NULL DEFAULT NULL,
  location VARCHAR(60) NULL DEFAULT NULL,
  bike VARCHAR(60) NULL DEFAULT NULL,
  forkPSI INTEGER NULL DEFAULT NULL,
  forkCompression INTEGER NULL DEFAULT NULL,
  forkRebound INTEGER NULL DEFAULT NULL,
  shockPSI INTEGER NULL DEFAULT NULL,
  shockCompression INTEGER NULL DEFAULT NULL,
  shockRebound INTEGER NULL DEFAULT NULL,
  frontTirePSI INTEGER NULL DEFAULT NULL,
  rearTirePSI INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `bikeLog` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `bikes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `locations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `bikeLog` (`date`,`location`,`bike`,`forkPSI`,`forkCompression`,`forkRebound`,`shockPSI`,`shockCompression`,`shockRebound`,`frontTirePSI`,`rearTirePSI`) VALUES
('10/5/2021','Brushy Creek','Intense Spider SX', 150, 0, 0, 215, 0, 5, 25, 25);
INSERT INTO `bikeLog` (`date`,`location`,`bike`,`forkPSI`,`forkCompression`,`forkRebound`,`shockPSI`,`shockCompression`,`shockRebound`,`frontTirePSI`,`rearTirePSI`) VALUES
('10/10/2021','Santa Rita Ranch','Intense Spider SX', 160, 0, 0, 200, 0, 5, 28, 28);
INSERT INTO `bikeLog` (`date`,`location`,`bike`,`forkPSI`,`forkCompression`,`forkRebound`,`shockPSI`,`shockCompression`,`shockRebound`,`frontTirePSI`,`rearTirePSI`) VALUES
('10/12/2021','Brushy Creek','Intense Spider SX', 160, 0, 0, 230, 0, 5, 22, 22);