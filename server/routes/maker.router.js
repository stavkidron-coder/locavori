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
    // req.body.business_license,
    //  req.body.business_type,
  
    // PRODUCT DISTRIBUTION
    //  req.body.product_distribution,
    req.body.delivery_type.pick_up,
    req.body.delivery_type.delivery,
    req.body.delivery_type.shipping,
    req.body.availability,
  
    // PRODUCT TYPES **DIFFERS FROM DB**
    //  req.body.prepared_type,
    //  req.body.fresh_type,
    //  req.body.beverge_type,
    //  req.body.product_category,
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
    pickup = $23,
    delivery = $24,
    shipping = $25,
    product_avail = $26,
    product_unique = $27,
    awards = $28,
    sales_sheet = $29,
    product_type_one = $30,
    product_img_one = $31,
    product_url_one = $32,
    product_type_two = $33,
    product_img_two = $34,
    product_url_two = $35,
    product_type_three = $36,
    product_img_three = $37,
    product_url_three = $38,
    owner_img = $39,
    story = $40,
    give_back = $41,
    anything_else = $42
    WHERE profile_id = $43;`;
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