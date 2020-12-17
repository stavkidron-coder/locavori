
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- DATABASE NAME: locavori


-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );


-- Base creates 5 table, 3 normal table, 2 junction tables

CREATE TABLE "tbl_artisans" (
	"id" serial NOT NULL,
	"profile_id" integer NOT NULL,
	"legal_name" varchar(50),
	"business_name" varchar(150),
	"first_name" varchar(50),
	"last_name" varchar(50),
	"email_contact" varchar(100),
	"phone_one" varchar(20),
	"phone_two" varchar(20),
	"business_address" varchar(150),
	"business_address_two" varchar(150),
	"business_city" varchar(150),
	"business_state" varchar(150),
	"business_postalcode" varchar(150),
	"business_country" varchar(150),
	"public_address_one" varchar(150),
	"public_address_two" varchar(150),
	"public_city" varchar(150),
	"public_state" varchar(150),
	"public_zip" varchar(150),
	"public_country" varchar(150),
	"latitude" varchar(150),
	"longitude" varchar(150),
	"website" varchar(150),
	"facebook" varchar(150),
	"instagram" varchar(150),
	"public_email" varchar(150),
	"other_contacts" varchar(150),
	"license" varchar(150),
	"st_license" varchar(150),
	"give_back" varchar(150),
	"business_type" varchar(150),
	"business_type_other" varchar(150),
	"where_sold" varchar(150),
	"where_sold_other" varchar(150),
	"pickup" varchar(150),
	"delivery" varchar(150),
	"shipping" varchar(150),
	"product_dist" varchar(150),
	"story" varchar(2400),
	"product_avail" varchar(50),
	"product_type_food" varchar(50),
	"product_type_food_other" varchar(50),
	"product_type_fresh" varchar(300),
	"product_type_fresh_other" varchar(50),
	"product_type_bev" varchar(100),
	"product_type_bev_other" varchar(50),
	"product_type_exp" varchar(100),
	"product_type_exp_other" varchar(100),
	"product_type_cat" varchar(100),
	"product_type_cat_other" varchar(100),
	"product_type_one" varchar(100),
	"product_img_one" varchar(700),
	"product_url_one" varchar(1200),
	"product_type_two" varchar(100),
	"product_img_two" varchar(1200),
	"product_url_two" varchar(1200),
	"product_type_three" varchar(100),
	"product_img_three" varchar(1200),
	"product_url_three" varchar(1200),
	"product_unique" varchar(200),
	"owner_img" varchar(1200),
	"video" varchar(1200),
	"product_img" varchar(1200),
	"lifestyle_img" varchar(1200),
	"business_img" varchar(1200),
	"anything_else" varchar(1200),
	"awards" varchar(200),
	"sales_sheet" varchar(200),
	"logo" varchar(1200),
	"status" varchar(30),
	"dateStampUTC" time,
	"modifiedUTC" time,
	CONSTRAINT "tbl_artisans_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tbl_profile" (
	"id" serial NOT NULL,
	"first_name" varchar(50),
	"last_name" varchar(50),
	"email" varchar(50) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	"date_stamp" time DEFAULT NULL,
	CONSTRAINT "tbl_profile_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tbl_favorites" (
	"id" serial NOT NULL,
	"profile_id" integer NOT NULL,
	"maker_id" integer NOT NULL,
	CONSTRAINT "tbl_favorites_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "artisans_type" (
	"id" serial NOT NULL,
	"artisans_id" integer NOT NULL,
	"type_id" integer NOT NULL,
	CONSTRAINT "artisans_type_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tbl_type" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "tbl_type_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- Alters Set up Unique reqirements and Foreign Keys
ALTER TABLE "tbl_artisans" ADD CONSTRAINT "tbl_artisans_fk0" FOREIGN KEY ("profile_id") REFERENCES "tbl_profile"("id");

ALTER TABLE "tbl_favorites" ADD CONSTRAINT "tbl_favorites_fk0" FOREIGN KEY ("profile_id") REFERENCES "tbl_profile"("id");
ALTER TABLE "tbl_favorites" ADD CONSTRAINT "tbl_favorites_fk1" FOREIGN KEY ("maker_id") REFERENCES "tbl_artisans"("id");

ALTER TABLE "artisans_type" ADD CONSTRAINT "artisans_type_fk0" FOREIGN KEY ("artisans_id") REFERENCES "tbl_artisans"("id");
ALTER TABLE "artisans_type" ADD CONSTRAINT "artisans_type_fk1" FOREIGN KEY ("type_id") REFERENCES "tbl_type"("id");

-- Currently a Get all artisans and their types without filtering
SELECT * FROM "tbl_artisans"
JOIN "artisan_type" ON "tbl_artisans"."id" = "artisan_type"."artisan_id"
JOIN "product_type" ON "product_type"."id" = "artisan_type"."type_id";


-- Inserts all types of categories, product types and filter materials
INSERT INTO "public"."tbl_type"("id","name")
VALUES
(1,E'Farmer-Grower'),
(2,E'Forager'),
(3,E'Maker'),
(4,E'Distiller'),
(5,E'Brewer'),
(6,E'Winemaker'),
(7,E'Cidery'),
(8,E'Roaster'),
(9,E'Apiary (Bees)'),
(10,E'Local Grocery Stores'),
(11,E'Co-ops'),
(12,E'Farmers Market or other Public Markets'),
(13,E'Online on Amazon'),
(14,E'Online at Company Websites'),
(15,E'Gift or Subscription Box Companies'),
(16,E'Retail Store, non-grocery'),
(17,E'Your place of business, farm or home'),
(18,E'Roadside Stand'),
(19,E'Local Delivery'),
(20,E'Curbside Pickup'),
(21,E'Shipping'),
(22,E'Pick Up'),
(23,E'Delivery'),
(24,E'Limited Availability'),
(25,E'Available All Year'),
(26,E'Jams, Jellies, Spreadables'),
(27,E'Pickles, Relish'),
(28,E'Vinegars'),
(29,E'Cookies'),
(30,E'Crackers'),
(31,E'Chips'),
(32,E'Syrups'),
(33,E'Honey'),
(34,E'Pancake Mix'),
(35,E'Baking Mix'),
(36,E'Cooking Sauce'),
(37,E'Hot Sauces'),
(38,E'Salsa'),
(39,E'Hard Candy / Sweets'),
(40,E'Popcorn'),
(41,E'Chocolate'),
(42,E'Soft or Chewy Candy / Sweets'),
(43,E'Nuts'),
(44,E'Other Snacks'),
(45,E'Dried Food'),
(46,E'Granola'),
(47,E'Soups (fresh or mix)'),
(48,E'Catsup'),
(49,E'Mustard'),
(50,E'Sweet Treat'),
(51,E'Rub'),
(52,E'Marinade'),
(53,E'Dried Vegetable'),
(54,E'Other Sauce'),
(55,E'Dried Meat or Jerky'),
(56,E'Preserved, Shelf-stable meat'),
(57,E'Bakery: fresh bread/pastries'),
(58,E'Beef'),
(59,E'Chicken'),
(60,E'Lamb'),
(61,E'Bison'),
(62,E'Pork'),
(63,E'Eggs'),
(64,E'Cheese'),
(65,E'Herbs'),
(66,E'Apples'),
(67,E'Blueberries'),
(68,E'Strawberries'),
(69,E'Fresh Vegetables'),
(70,E'Fresh Fruit'),
(71,E'Milk'),
(72,E'Cream'),
(73,E'Flowers'),
(74,E'Schrubs or Switchel'),
(75,E'Soda Pop (rootbeer, sassparilla, etc)'),
(76,E'Coffee'),
(77,E'Hot Cocoa or Hot Drink Mix'),
(78,E'Tea'),
(79,E'Health or Energy Shot'),
(80,E'Sweet Treat'),
(81,E'Cocktail or Bar Mixer'),
(82,E'Spirits'),
(83,E'Beer'),
(84,E'Hard Cider'),
(85,E'Wine'),
(86,E'Fresh Fruit'),
(87,E'Non-Alcoholic Beverage'),
(88,E'Dairy'),
(89,E'Snack'),
(90,E'Sweet Treat'),
(91,E'Salty / Savory Treat'),
(92,E'Healthy'),
(93,E'Gluten Free'),
(94,E'Vegan'),
(95,E'Dairy Free'),
(96,E'Organic'),
(97,E'Majority of your product ingredients are locally grown (grown within your state or neighboring state)'),
(98,E'Fair-Trade Sourced'),
(99,E'Farmer / Grower Made'),
(100,E'Small Batch'),
(101,E'Hand Made'),
(102,E'Non GMO'),
(103,E'No Trans Fats'),
(104,E'No High Fructose Corn Syrup or Similar'),
(105,E'Nitrate Free'),
(106,E'State or Regional Award Winning'),
(107,E'Keto / Low Carb'),
(108,E'Nut-Free'),
(109,E'Kosher'),
(110,E'Low Sodium'),
(111,E'Gift');