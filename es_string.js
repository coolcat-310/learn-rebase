let product = {
    "product_id": 5,
    "name": "academy_redeem_free",
    "label": "academy_prod_redeem_free",
    "expiration_date": "1601598714",
    "subscription_type": "free_limited",
    "next_billing_date": "N/A"
};

if(product.next_billing_date){
    console.log('case 1');
   console.log(typeof product.next_billing_date);
   console.log(parseInt(product.next_billing_date));
    console.log(isNaN(parseInt(product.next_billing_date)));
}

if(product.expiration_date){
    console.log('case 2');
    console.log(typeof product.expiration_date);
    console.log(parseInt(product.expiration_date));
    console.log(isNaN(parseInt(product.expiration_date)));
}



const wait5 =  new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve(5);
        }, 5000);
});

wait5.then((x)=>{
    console.log(x);
});


console.log(wait5);

