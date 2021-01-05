const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "tbl_artisans";';
  pool.query(queryText)
    .then(result => {
        res.send(result.rows);
        
    }).catch(error => {
        res.sendStatus(500);
        console.log('error in GET makers', error);
    });
});

router.get('/:id', (req, res) => {
  const queryText = `
  SELECT * FROM "tbl_artisans"
  WHERE "profile_id" = ${req.params.id}
  `;
  console.log(req.params.id);
  
// AND WHERE "id" = ${req.params.id} 


  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  });
});

router.get('/filter', async (req, res) => {
  let businessArray = req.query.business.split(',');
  let deliveryArray = req.query.delivery.split(',');
  let productArray = req.query.product.split(',');
  let resultArray = [];
    const queryText = 'SELECT * FROM "tbl_artisans" where "business_type" = $1;';
    for (let i = 0; i < businessArray.length; i++){
      try {
         var result = await pool.query(queryText, [businessArray[i]])
         resultArray.push(result.rows)
      } catch (error) {
        res.sendStatus(500);
        return
      }
    }
    return res.send(resultArray);
  });

/**
 * PUT route template
 */
router.put('/', (req, res) => {
  console.log(req.body);

  // CONTACT INFO
  const legal_name = req.body.contact.legal_business_name;
  const business_name = req.body.contact.public_business_name;
  const first_name = req.body.contact.first_name;
  const last_name = req.body.contact.last_name;
  const email_contact = req.body.contact.email;
  const phone_one = req.body.contact.phone;
  const phone_two = req.body.contact.alt_phone;
  const business_address = req.body.contact.business_address;
  const business_address_two = req.body.contact.business_suite_num;
  const business_city = req.body.contact.business_city;
  const business_postalcode = req.body.contact.business_zip_code;
  const public_address = req.body.contact.public_address;
  const public_address_two = req.body.contact.public_suite_num;
  const public_city = req.body.contact.public_city;
  const public_postalcode = req.body.contact.public_zip_code;

  // BUSINESS SPECIFICATIONS
  const website = req.body.business_specs.website;
  const facebook = req.body.business_specs.facebook;
  const instagram = req.body.business_specs.instagram;
  const public_email = req.body.business_specs.public_email;
  const license_state = req.body.business_specs.license_id_state;
  const license = req.body.business_license;
  const business_type = req.body.business_type;

  // PRODUCT DISTRIBUTION
  const where_sold = req.body.product_distribution;
  const pickup = req.body.delivery_type.pick_up;
  const delivery = req.body.delivery_type.delivery;
  const shipping = req.body.delivery_type.shipping;
  const product_avail = req.body.availability;

  // PRODUCT TYPES **DIFFERS FROM DB**
  const product_type_prepared = req.body.prepared_type;
  const product_type_fresh = req.body.fresh_type;
  const product_type_beverage = req.body.beverge_type;
  const product_type_cat = req.body.product_category;
  const product_unique = req.body.product_info.unique;
  const awards = req.body.product_info.awards;
  const specialties = req.body.product_info.specialties;

  // FEATURED PRODUCTS
  const product_type_one = req.body.featured_products.product_one_type;
  const product_img_one = req.body.featured_products.product_one_image;
  const product_url_one = req.body.featured_products.product_one_url;
  const product_type_two = req.body.featured_products.product_two_type;
  const product_img_two = req.body.featured_products.product_two_image;
  const product_url_two = req.body.featured_products.product_two_url;
  const product_type_three = req.body.featured_products.product_three_type;
  const product_img_three = req.body.featured_products.product_three_image;
  const product_url_three = req.body.featured_products.product_three_url;

  // STORY / ABOUT ME
  const owner_img = req.body.story_info.profile_image;
  const story = req.body.story_info.story;
  const give_back = req.body.story_info.give_back;
  const anything_else = req.body.story_info.anything_else;
});

module.exports = router;