CREATE DATABASE chat;

USE chat;

-- CREATE TABLE `messages` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `text` VARCHAR(140) NULL DEFAULT NULL,
--   `user` VARCHAR(20) NULL DEFAULT NULL,
--   `room` VARCHAR (20) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- /* Create other tables and define schemas for them here! */
-- CREATE TABLE `users` (
--     `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--     `name` VARCHAR(20) NULL DEFAULT NULL
-- );

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(40) NULL DEFAULT NULL,
  `userid` INTEGER NULL DEFAULT NULL,
  `roomid` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `rooms`;
    
CREATE TABLE `rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (userid) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (roomid) REFERENCES `rooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`text`,`userid`,`roomid`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `rooms` (`id`,`name`) VALUES
-- ('','');


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- mysql -u student -p < server/schema.sql

