const express = require("express");
const cors = require("cors");
const stripe = require("stripe") ("sk_test_51JzbDSSFcwTMJV6VYjDP6ArYupqPsafvyCOaMTLY5nuuu1Y5Haik4BPgUZiisUJ11pQG7ralI1WC1CwlJXPsuolG00aiR7v0xa");
 
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res) =>{
    res.send("Welcome into react shop website");
}); 
app.post("/checkout", async(req,res) => {
    let error;
    let status;
    try{
        const {product, token} = req.body;
        const customer =  await stripe.customers.create({
            email:token.email,
            source: token.id
        })
        const key = uuidv4();
        const charge = await stripe.charges.create(
            {
                 amount : product.price * 100,
                 currency : "usd",
                 customer : customer.id,
                 receipt_email : token.email,
                 description : "All Products Description",
                 shipping : {
                     name: token.card.name,
                     address :{
                          line1 : token.card.address_line1,
                          line2 : token.card.address_line2,
                          city : token.card.address_city,
                          country : token.card.address_country,
                          postal_code : token.card.address_zip
                     }
                 }

            },
            
            {idempotencyKey:key})
            status = "Success";
    }catch(error) {
            console.log(error,'status');
            status = "error";
    }
    res.json({status});
} )

app.listen(8080, () => {
    console.log("Your app is running on port no. 8080");
});