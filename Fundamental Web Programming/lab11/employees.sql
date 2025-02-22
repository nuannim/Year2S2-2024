CREATE TABLE employees (
EmployeeID INTEGER PRIMARY KEY NOT NULL,
FirstName VARCHAR(20) NOT NULL,
LastName VARCHAR(30) NOT NULL,
EmailAddress VARCHAR(50) NOT NULL,
JobTitle VARCHAR(30) NOT NULL,
PrimaryPhone VARCHAR(25) NOT NULL,
SecondaryPhone VARCHAR(25),
Title VARCHAR(30) NOT NULL,
Notes VARCHAR(100),
Attachments VARCHAR(20) NOT NULL );

INSERT INTO employees (EmployeeID,FirstName,LastName,EmailAddress,JobTitle,PrimaryPhone,SecondaryPhone,Title,Notes,Attachments)
VALUES
(1,'Nancy','Freehafer','nancy@northwindtraders.com','Sales Representative','123-555-0100','123-555-0200','Ms.','','NancyF.jpg'),
(2,'Andrew','Cencini','andrew@northwindtraders.com','Vice President','123-555-0101','','Mr.','Joined the company as a sales representative','AndrewC.jpg'),
(3,'Jan','Kotas','jan@northwindtraders.com','Sales Representative','123-555-0102','','Mr.','Was hired as a sales associate and was promoted to sales representative.','JanK.jpg'),
(4,'Mariya','Sergienko','mariya@northwindtraders.com','Sales Representative','123-555-0103','','Ms.','','MariyaS.jpg'),
(5,'Steven','Thorpe','steven@northwindtraders.com','Sales Manager','123-555-0104','','Mr.','Joined the company as a sales representative and was promoted to sales manager.','StevenT.jpg'),
(6,'Michael','Neipper','michael@northwindtraders.com','Sales Representative','123-555-0105','','Mr.','Fluent in Japanese and can read and write French','MichaelN.jpg'),
(7,'Robert','Zare','robert@northwindtraders.com','Sales Representative','123-555-0106','','Mr.','','RobertZ.jpg'),
(8,'Laura','Giussani','laura@northwindtraders.com','Sales Coordinator','123-555-0107','','Ms.','Reads and writes French.','LauraG.jpg'),
(9,'Anne','Hellung-Larsen','anne@northwindtraders.com','Sales Representative','123-555-0108','','Ms.','Fluent in French and German.','AnneH.jpg');
