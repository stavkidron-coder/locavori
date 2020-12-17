--Maker/Artisan Table
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
	"dateStampUTC" timestamp default current_timestamp,
	"modifiedUTC" time default current_timestamp,
	CONSTRAINT "tbl_artisans_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


--Localvore table
CREATE TABLE "tbl_profile" (
	"id" serial NOT NULL,
	"first_name" varchar(50),
	"last_name" varchar(50),
	"birth_date" varchar (50),
	"email" varchar(50) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	"date_stamp" timestamp default current_timestamp,
	CONSTRAINT "tbl_profile_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- Junction table to store a locavore's favorite artisans
CREATE TABLE "tbl_favorites" (
	"id" serial NOT NULL,
	"profile_id" integer NOT NULL,
	"maker_id" integer NOT NULL,
	CONSTRAINT "tbl_favorites_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- Junction table to relate types to an artisans
CREATE TABLE "artisans_type" (
	"id" serial NOT NULL,
	"artisans_id" integer NOT NULL,
	"type_id" integer NOT NULL,
	CONSTRAINT "artisans_type_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- List of all types and filterable data points
CREATE TABLE "tbl_type" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "tbl_type_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- Alters to bind tables with foreign keys
ALTER TABLE "tbl_artisans" ADD CONSTRAINT "tbl_artisans_fk0" FOREIGN KEY ("profile_id") REFERENCES "tbl_profile"("id");
ALTER TABLE "tbl_favorites" ADD CONSTRAINT "tbl_favorites_fk0" FOREIGN KEY ("profile_id") REFERENCES "tbl_profile"("id");
ALTER TABLE "tbl_favorites" ADD CONSTRAINT "tbl_favorites_fk1" FOREIGN KEY ("maker_id") REFERENCES "tbl_artisans"("id");
ALTER TABLE "artisans_type" ADD CONSTRAINT "artisans_type_fk0" FOREIGN KEY ("artisans_id") REFERENCES "tbl_artisans"("id");
ALTER TABLE "artisans_type" ADD CONSTRAINT "artisans_type_fk1" FOREIGN KEY ("type_id") REFERENCES "tbl_type"("id");

-- All Types
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

-- CrybabyCraig's Hot Sauce Insert
INSERT INTO "public"."tbl_profile"("id","first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(1,E'Craig',E'CryBaby',E'1994-09-12',E'CrybabyCraigs@gmail.com',E'ship',E'2020-12-17 10:49:42.28384');
INSERT INTO "public"."tbl_artisans"("id","profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","status","dateStampUTC","modifiedUTC")
VALUES
(1,1,E'Craig',E'Crybaby Craigs',E'Craig',E'Kaiser',E'craig@crybabycraigs.gmail',E'502-202-2342',E'542-243-2938',E'1222 2nd Street Northeast',NULL,E'Mineeapolis',E'MN',E'55413',E'USA',E'1222 2nd Street NorthEast',NULL,E'Minneapolis',E'MN',E'55413',E'USA',E'45.00075',E'-93.26635',E'http://www.crybabycraigs.com/',E'https://www.facebook.com/CryBabyCraigs',E'NULL',E'craig@crybabycraigs.com',E'NULL',E'NULL',E'NULL',E'NULL',E'Condoments',E'NULL',E'NULL',E'NULL',E'NULL',NULL,NULL,NULL,E'HOT SAUCE FOR DAYS HOMES',E'YES',E'HOT SAUCE',E'NULL',E'YES',E'NULL',E'NO',E'NULL',E'NULL',E'NULL',E'NULL',E'NULL',E'HOT SAUCE',E'https://images.squarespace-cdn.com/content/v1/57110bf1b6aa608f4e1ed91c/1461266074787-IL30S1SS6F3NWHZDUN1R/ke17ZwdGBToddI8pDm48kHDdJ77rKG8qIHjY7NDr201Zw-zPPgdn4jUwVcJE1ZvWgCjmTad1QpYCGph9EV4QZUJFbgE-7XRK3dMEBRBhUpw3WfV_5oenwKY2Z8m_4RdXj7gVi-UEKdRXfIwKAK-hxDObU5caQUqF4ocJnIKDCFg/cbc1.jpg?format=1000w',E'http://www.crybabycraigs.com/',E'HOT SAUCE',E'https://static1.squarespace.com/static/57110bf1b6aa608f4e1ed91c/5711349940261d0c19d2fa45/5dbc9a2c4c3d7f546463c763/1582148038370/?format=1500w',E'http://www.crybabycraigs.com/',E'HOT SAUCE',E'http://www.crybabycraigs.com/',E'https://images.squarespace-cdn.com/content/v1/57110bf1b6aa608f4e1ed91c/1461019795117-GFZQY2VTUJK321FWQ3RU/ke17ZwdGBToddI8pDm48kLuv8xSh8SgRgitmpnSOFPZZw-zPPgdn4jUwVcJE1ZvW56LRaUT1pClzWs44DErAMUJFbgE-7XRK3dMEBRBhUpz10js8IJ_mUMazbLsxxKMMzTTiChn4dZ14nYmZlUnpuREYFnapNv7TZRMEpgw8ZiY/crybaby_citypages.jpg',E'Sure',E'https://images.squarespace-cdn.com/content/v1/57110bf1b6aa608f4e1ed91c/1461019795117-GFZQY2VTUJK321FWQ3RU/ke17ZwdGBToddI8pDm48kLuv8xSh8SgRgitmpnSOFPZZw-zPPgdn4jUwVcJE1ZvW56LRaUT1pClzWs44DErAMUJFbgE-7XRK3dMEBRBhUpz10js8IJ_mUMazbLsxxKMMzTTiChn4dZ14nYmZlUnpuREYFnapNv7TZRMEpgw8ZiY/crybaby_citypages.jpg',E'NULL',E'https://i.ytimg.com/vi/HlE5BlUjgNQ/mqdefault.jpg',E'https://images.squarespace-cdn.com/content/v1/57110bf1b6aa608f4e1ed91c/1461019795117-GFZQY2VTUJK321FWQ3RU/ke17ZwdGBToddI8pDm48kLuv8xSh8SgRgitmpnSOFPZZw-zPPgdn4jUwVcJE1ZvW56LRaUT1pClzWs44DErAMUJFbgE-7XRK3dMEBRBhUpz10js8IJ_mUMazbLsxxKMMzTTiChn4dZ14nYmZlUnpuREYFnapNv7TZRMEpgw8ZiY/crybaby_citypages.jpg',E'https://pbs.twimg.com/profile_images/496697943261331456/czKhsTPX_400x400.png',E'Nothanks!',E'Tons',E'https://stmedia.stimg.co/ctyp-022520-MN-Spice-Cry-Baby-Craigs-hotsauce.jpg?w=700',E'https://pbs.twimg.com/profile_images/496697943261331456/czKhsTPX_400x400.png',E'active',E'2020-12-17 11:02:35.6665',E'11:02:35.6665');
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(1,1,14),
(2,1,16),
(3,1,19),
(4,1,37),
(5,1,11),
(6,1,97),
(7,1,102);

-- GET QUERIES

-- GETS ALL ARTISANS AND ALL OF THEIR CATEGORIES
SELECT * FROM "tbl_artisans"
JOIN "artisans_type" ON "tbl_artisans"."id" = "artisans_type"."artisans_id"
JOIN "tbl_type" ON "tbl_type"."id" = "artisans_type"."type_id";