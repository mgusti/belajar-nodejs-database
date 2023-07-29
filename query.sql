-- insert into products(id,name,price,stock,category)
-- value
-- ('P0006','A',1000,100,'K2'),
-- ('P0007','B',2000,200,'K2'),
-- ('P0008','C',3000,300,'K2'),
-- ('P0009','D',4000,400,'K2'),
-- ('P0010','E',5000,500,'K2');

-- select * from products

-- create table categories
-- (
--     id int not null auto_increment,
--     name varchar(100) not null,
--     primary key (id)
-- ) engine innodb;

-- select * from customers

-- create table wallet
-- (
--     id varchar(100) not null,
--     balance int not null,
--     customer_id varchar(100) not null,
--     primary key (id),
--     constraint wallet_customer_id_fk foreign key (customer_id) references customers(id),
--     constraint wallet_customer_id_unique unique (customer_id)
-- ) engine innodb;

-- create table comments
-- (
--     id int not null auto_increment,
--     customer_id varchar(100) not null,
--     title varchar(100) not null,
--     description text,
--     primary key(id),
--     constraint comments_customer_id_fk foreign key (customer_id) references customers (id)
-- )engine innodb;

-- insert into comments(customer_id,title,description)
-- values
-- ('eko','Comment Satu', 'Sample comment satu'),
-- ('eko','Comment Dua', 'Sample comment dua'),
-- ('budi','Comment Satu', 'Sample comment satu'),
-- ('budi','Comment Dua', 'Sample comment dua');

-- create table likes
-- (
--     customer_id varchar(100) not null,
--     product_id varchar(100) not null,
--     primary key (customer_id,product_id),
--     constraint likes_customer_id_fk foreign key (customer_id) references customers(id),
--     constraint likes_product_id_fk foreign key (product_id) references products(id)
-- )engine innodb;

-- select * from products

-- create table _loves
-- (
--     A varchar(100) not null,
--     B varchar(100) not null,
--     primary key (A,B),
--     constraint customer_loves_fk foreign key (A) references customers(id),
--     constraint product_loves_fk foreign key (B) references products(id)
-- )engine innodb;

-- create database belajar_nodejs_prisma
desc sample;