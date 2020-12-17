
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- DATABASE NAME: locavori


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);




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



ALTER TABLE "tbl_artisans" ADD CONSTRAINT "tbl_artisans_fk0" FOREIGN KEY ("profile_id") REFERENCES "tbl_profile"("id");

ALTER TABLE "tbl_favorites" ADD CONSTRAINT "tbl_favorites_fk0" FOREIGN KEY ("profile_id") REFERENCES "tbl_profile"("id");
ALTER TABLE "tbl_favorites" ADD CONSTRAINT "tbl_favorites_fk1" FOREIGN KEY ("maker_id") REFERENCES "tbl_artisans"("id");

ALTER TABLE "artisans_type" ADD CONSTRAINT "artisans_type_fk0" FOREIGN KEY ("artisans_id") REFERENCES "tbl_artisans"("id");
ALTER TABLE "artisans_type" ADD CONSTRAINT "artisans_type_fk1" FOREIGN KEY ("type_id") REFERENCES "tbl_type"("id");

SELECT * FROM "tbl_artisans"
JOIN "artisan_type" ON "tbl_artisans"."id" = "artisan_type"."artisan_id"
JOIN "product_type" ON "product_type"."id" = "artisan_type"."type_id";


INSERT INTO "public"."product_type"("id","type")
VALUES
(1,E'Women-owned'),
(2,E'POC-owned'),
(3,E'Prepared/Packaged, Self-Stable, or Refridgerated'),
(4,E'Fresh Food (Grown or Raised)'),
(5,E'Beverages'),
(6,E'Limited availability'),
(7,E'Available all year'),
(8,E'Snack'),
(9,E'Sweet Treat'),
(10,E'Salty/Savory Treat'),
(11,E'Healthy'),
(12,E'Gluten Free'),
(13,E'Vegan'),
(14,E'Dairy Free'),
(15,E'Organic'),
(16,E'Locally-grown'),
(17,E'Fair-trade sourced'),
(18,E'Farmer / Grower made'),
(19,E'Small Batch'),
(20,E'Hand Made'),
(21,E'Non GMO'),
(22,E'No Trans Fats'),
(23,E'No High Fructose Corn syrup'),
(42,E'Nitrate Free'),
(43,E'Award-winning'),
(44,E'Keto/Low Carb'),
(45,E'Nut-free'),
(46,E'Kosher'),
(47,E'Low Sodium'),
(48,E'Gift'),
(49,E'Other Category');