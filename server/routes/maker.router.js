const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/getall', (req, res) => {
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

router.get('/', async (req, res) => {
  let availabilityArray = req.query.availability.split(',');
  let deliveryArray = req.query.delivery.split(','); // NEEDS TO BE BROKEN UP *****
  let makerArray = req.query.makers.split(',');
  let locationArray = req.query.location.split(',');
  let freshArray = req.query.fresh.split(',');
  let preparedArray = req.query.prepared.split(',');
  let beveragesArray = req.query.beverages.split(',');
  let dietArray = req.query.diet.split(',');
  let resultArray = [];
    // const queryAvail = 'SELECT * FROM tbl_artisans WHERE product_avail = $1';
    // for (let i = 0; i < availabilityArray.length; i++){
    //   try {
    //      var result = await pool.query(queryAvail, [availabilityArray[i]])
    //      resultArray.push(result.rows)
    //   } catch (error) {
    //     res.sendStatus(500);
    //     return
    //   }
    // }
    const queryMaker = 'SELECT * FROM tbl_artisans WHERE business_type LIKE $1'
    for (let i = 0; i < makerArray.length; i++){
      try {
         console.log(makerArray[i]);
         var result = await pool.query(queryMaker, [makerArray[i]])
         console.log(result.rows);
         resultArray.push(result.rows)
      } catch (error) {
        res.sendStatus(500);
        return
      }
    }
    console.log(resultArray);
    return res.send(resultArray);
  });

/**
 * PUT route template
 */
router.put('/', (req, res) => {

  const makerInfo =[

    //  CONTACT INFO
    req.body.contact.legal_business_name,
    req.body.contact.public_business_name,
    req.body.contact.first_name,
    req.body.contact.last_name,
    req.body.contact.email,
    req.body.contact.phone,
    req.body.contact.alt_phone,
    req.body.contact.business_address,
    req.body.contact.business_suite_num,
    req.body.contact.business_city,
    req.body.contact.business_zip_code,
    req.body.business_state,
    req.body.contact.public_address,
    req.body.contact.public_suite_num,
    req.body.contact.public_city,
    req.body.contact.public_zip_code,
    req.body.public_state,
  
    // BUSINESS SPECIFICATIONS
    req.body.business_specs.website,
    req.body.business_specs.facebook,
    req.body.business_specs.instagram,
    req.body.business_specs.public_email,
    req.body.business_specs.license_id_state,
    req.body.business_license,
    req.body.business_type,
  
    // PRODUCT DISTRIBUTION
    req.body.product_distribution,
    req.body.delivery_type.pick_up,
    req.body.delivery_type.delivery,
    req.body.delivery_type.shipping,
    req.body.availability,
  
    // PRODUCT TYPES **DIFFERS FROM DB**
    req.body.prepared_type,
    req.body.fresh_type,
    req.body.beverage_type,
    req.body.product_category,
    req.body.product_info.unique,
    req.body.product_info.awards,
    req.body.product_info.specialties,
  
    // FEATURED PRODUCTS
    req.body.featured_products.product_one_type,
    req.body.featured_products.product_one_image,
    req.body.featured_products.product_one_url,
    req.body.featured_products.product_two_type,
    req.body.featured_products.product_two_image,
    req.body.featured_products.product_two_url,
    req.body.featured_products.product_three_type,
    req.body.featured_products.product_three_image,
    req.body.featured_products.product_three_url,
  
    // STORY / ABOUT ME
    req.body.story_info.profile_image,
    req.body.story_info.story,
    req.body.story_info.give_back,
    req.body.story_info.anything_else,

    // USER ID
    req.user.id
   ]
  // *** SALES SHEET IS SPECIALTIES IN THE MEAN TIME ***
  const queryText = `UPDATE tbl_artisans SET 
    legal_name = $1, 
    business_name = $2, 
    first_name = $3, 
    last_name = $4, 
    email_contact = $5, 
    phone_one = $6, 
    phone_two = $7, 
    business_address = $8, 
    business_address_two = $9, 
    business_city = $10, 
    business_postalcode = $11, 
    business_state = $12, 
    public_address_one = $13, 
    public_address_two = $14, 
    public_city = $15, 
    public_zip = $16, 
    public_state = $17,
    website = $18,
    facebook = $19,
    instagram = $20,
    public_email = $21,
    st_license = $22,
    license = $23,
    business_type = $24,
    where_sold = $25,
    pickup = $26,
    delivery = $27,
    shipping = $28,
    product_avail = $29,
    product_type_food = $30,
    product_type_fresh = $31,
    product_type_bev = $32,
    product_type_cat = $33,
    product_unique = $34,
    awards = $35,
    sales_sheet = $36,
    product_type_one = $37,
    product_img_one = $38,
    product_url_one = $39,
    product_type_two = $40,
    product_img_two = $41,
    product_url_two = $42,
    product_type_three = $43,
    product_img_three = $44,
    product_url_three = $45,
    owner_img = $46,
    story = $47,
    give_back = $48,
    anything_else = $49
    WHERE profile_id = $50;`;
    pool.query(queryText, makerInfo)
        .then(() => {
            res.sendStatus(200);
        }).catch(error => {
            res.sendStatus(500);
            console.log('error in PUT maker info', error);
        });
    
});


  router.put('/:id', (req, res) => {
    const queryText = `
    UPDATE "tbl_artisans"
    SET "approved_maker" = false
    where "id" = $1;`;
    pool.query(queryText, [ req.params.id])
      .then((result) => {
        res.sendStatus(200)
      }).catch((error) => {
        console.log('error in put', error);
        res.sendStatus(500);
      })
  })

module.exports = router;