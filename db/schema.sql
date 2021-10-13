-- ---
-- Table 'bikeTunerApp'
--
-- ---

DROP TABLE IF EXISTS `bikeTunerApp`;

CREATE TABLE `bikeTunerApp` (
  `id` INTEGER AUTO_INCREMENT,
  `date` TEXT,
  `location` TEXT,
  `bike` TEXT,
  `forkPSI` INTEGER,
  `forkCompression` INTEGER,
  `forkRebound` INTEGER,
  `shockPSI` INTEGER,
  `shockCompression` INTEGER,
  `shockRebound` INTEGER,
  `frontTirePSI` INTEGER,
  `rearTirePSI` INTEGER,
  `new field` INTEGER,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `bikeTunerApp` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `bikeTunerApp` (`id`,`date`,`location`,`bike`,`forkPSI`,`forkCompression`,`forkRebound`,`shockPSI`,`shockCompression`,`shockRebound`,`frontTirePSI`,`rearTirePSI`,`new field`) VALUES
-- ('','','','','','','','','','','','','');