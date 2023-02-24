```
USE  Art_of_bread;

--- CREATE THE TABLES ---
CREATE TABLE Category (
ID_Category 	INT PRIMARY KEY ,
Description		VARCHAR(40));


CREATE TABLE Products(
ID_Product		INT PRIMARY KEY,
Category		INT,
Product			VARCHAR(200),
Img_URL			VARCHAR(300),
Descriptions	VARCHAR (200),
Price			SMALLMONEY,
FOREIGN KEY (Category) REFERENCES CATEGORY(ID_Category)
);

SELECT * FROM Products;

CREATE TABLE  Clients (
ID_Client		    INT PRIMARY KEY,
Name 				VARCHAR(100),
LastName			VARCHAR(100),
Address				VARCHAR(200),
Email				VARCHAR(100),
Phone 				VARCHAR(100),
Password		    VARCHAR(225),
Permissions		    VARCHAR(45),
Active				INT DEFAULT 0);

DROP TABLE Clients;

CREATE TABLE Car (
ID_Car			INT PRIMARY KEY,
ID_Client		INT,
FOREIGN KEY (ID_Client) REFERENCES Clients(ID_Client)
);

DROP TABLE Car;

CREATE TABLE Car_Products (
ID_Car_Products INT PRIMARY KEY,
ID_Car			INT,
ID_Product		INT,
Amount			INT,
Total			SMALLMONEY,
FOREIGN KEY (ID_Car) REFERENCES Car(ID_Car),
FOREIGN KEY (ID_Product) REFERENCES Products(ID_Product));

DROP TABLE Car_Products;

CREATE TABLE Rol (
ID_Role 			INT PRIMARY KEY,
Name 				VARCHAR(50),
Roles 				INT,
FOREIGN KEY (Roles) REFERENCES Clients(ID_Client));



-------- INSERTS ---------
--CATEGORY
INSERT INTO Category(ID_Category, Description)
VALUES	(1,'Bread'),
		(2,'Dessert' ),
		(3, 'Coffee');
SELECT * FROM Category;

--PRODUCTS
INSERT INTO Products (ID_Product, Category, Product, Img_URL, Descriptions, price)
VALUES	(1,1,'Bread', 'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 'This dog-shaped bun is perfect for a fun afternoon with friends.', 2.29),
		(2,1,'Bread with Seeds!', 'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Delicious seeded bread for a flavorful breakfast.', 1.99),
		(3,1,'Baguette', 'https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'This baguette is perfect for making a French sandwich.', 2.49),
		(4,1,'Bread with cheese', 'https://images.pexels.com/photos/13427800/pexels-photo-13427800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Satisfy your cheese cravings with our freshly baked bread topped with savory melted cheese.', 4.99),
		(5,2,'Cake', 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Indulge in a heavenly treat with our fluffy and decadent cake, perfect for any occasion.', 2.59),
		(6,2,'Donuts', 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Indulge yourself with our delicious donuts, available in a variety of flavors and toppings that will make your mouth water.', 2.20),
		(7,2,'Pancakes', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Whether you like them stacked high or in a neat little stack, these pancakes will make your morning bright.', 1.39),
		(8,2,'Cupcakes', 'https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Satisfy your cravings with our heavenly cupcakes, bursting with flavor and finished with a delicate swirl of frosting.', 4.00),
		(9,2,'Macarons', 'https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Indulge in the exquisite flavors of these French delicacies, a bite-sized piece of heaven.', 2.99),
		(10,2,'Cookies', 'https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Sweet and crunchy, our freshly-baked cookies are the perfect treat for any occasion.', 3.50),
		(11,3,'Coffee', 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Get energized with our delicious coffee, made with the finest beans and roasted to perfection', 2.99),
		(12,3,'Frappe', 'https://images.pexels.com/photos/214333/pexels-photo-214333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Frappe, the perfect drink to cool off and enjoy a delicious blend of coffee and cream.', 1.99);
SELECT * FROM Products;

--CLIENTS
INSERT INTO Clients (ID_Client, Name, LastName, Address, Email, Phone, Password, Permissions, Active)
VALUES	(1, 'Juan', 'Perez', 'Calle 123, Ciudad', 'juan.perez@email.com', '1234567890', 'password123', 1),
		(2, 'Maria', 'Garcia', 'Avenida 456, Ciudad', 'maria.garcia@email.com', '2345678901', 'password456', 1),
		(3, 'Carlos', 'Lopez', 'Calle 789, Ciudad', 'carlos.lopez@email.com', '3456789012', 'password789', 1),
		(4, 'Sofia', 'Rodriguez', 'Avenida 321, Ciudad', 'sofia.rodriguez@email.com', '4567890123', 'password321', 1),
		(5, 'Luis', 'Hernandez', 'Calle 654, Ciudad', 'luis.hernandez@email.com', '5678901234', 'password654', 1),
		(6, 'Ana', 'Martinez', 'Avenida 987, Ciudad', 'ana.martinez@email.com', '6789012345', 'password987', 1),
		(7, 'Pablo', 'Gonzalez', 'Calle 210, Ciudad', 'pablo.gonzalez@email.com', '7890123456', 'password210', 1),
		(8, 'Laura', 'Diaz', 'Avenida 543, Ciudad', 'laura.diaz@email.com', '8901234567', 'password543', 1),
		(9, 'Diego', 'Pacheco', 'Calle 876, Ciudad', 'diego.pacheco@email.com', '9012345678', 'password876', 1),
		(10, 'Julia', 'Ruiz', 'Avenida 432, Ciudad', 'julia.ruiz@email.com', '0123456789', 'password432', 1);

SELECT * FROM Clients;

--CAR
INSERT INTO Car (ID_Car, ID_Client) 
VALUES	(1, 1),
		(2, 2),
		(3, 3),
		(4, 4),
		(5, 5),
		(6, 6),
		(7, 7),
		(8, 8),
		(9, 9),
		(10, 10);
SELECT * FROM Car;

--Car Products
INSERT INTO Car_Products (ID_Car_Products, ID_Car, ID_Product, Amount, Total) VALUES 
  (1, 1, 1, 2, 20.50),
  (2, 2, 2, 1, 15.00),
  (3, 3, 3, 4, 100.00),
  (4, 4, 4, 1, 25.00),
  (5, 5, 5, 3, 50.00),
  (6, 6, 6, 2, 40.00),
  (7, 7, 1, 1, 10.00),
  (8, 8, 2, 3, 45.00),
  (9, 9, 3, 1, 25.00),
  (10, 10, 8, 2, 50.00);
 
SELECT * FROM Car_Products;

--Rol
INSERT INTO Rol (ID_Role, Name, Roles) VALUES 
  (1, 'Admin', 1),
  (2, 'User', 2),
  (3, 'Guest', 3),
  (4, 'Moderator', 2);

SELECT * FROM Rol;
```