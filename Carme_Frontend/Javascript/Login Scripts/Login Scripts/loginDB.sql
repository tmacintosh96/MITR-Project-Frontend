CREATE TABLE `users` (
  `rcsID` varchar(255) NOT NULL,
  `rin` int NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(10) NOT NULL,
  `gender` varchar(50),
  `major` varchar(255) NOT NULL,
  `outstandingBalance` float NOT NULL,
  PRIMARY KEY (`rin`)
);

CREATE TABLE `sessions` (
  `sessionID` varchar(1000) NOT NULL,
  `userID` int NOT NULL,
  `expiration` DATETIME,
  PRIMARY KEY (`sessionID`(191))
);

ALTER TABLE `sessions` ADD CONSTRAINT `fk_userID2` FOREIGN KEY (`userID`) REFERENCES `users`(`rin`) ON DELETE NO ACTION ON UPDATE NO ACTION;

