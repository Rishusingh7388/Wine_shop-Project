let name = document.getElementById("name_of_vine");
let category = document.getElementById("category_of_vine");
let country = document.getElementById("country_of_vine");
let price = document.getElementById("price_of_vine");
let ID = 2;

let response = async ()=>{
    try{
        let result = await fetch(`http://localhost:3000/vines/${ID}`);
        let data = await result.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
response();


let cartcount = document.getElementById("cart_count");
let cart_minus = document.getElementById("cart_minus");
let cart_plus = document.getElementById("cart_plus");
let cart_count=1;
// if(cart_count==1){
//     cart_minus.disabled=true;
//     console.log("hello");
// }

cart_minus.addEventListener("click",()=>{
    if(cart_count==1){
        // cart_minus.disabled=true;

    }
    else{
        cart_count--;
        cartcount.textContent=cart_count;
    }
    console.log(cart_count);
})

cart_plus.addEventListener("click",()=>{
    cart_count++;
        cartcount.textContent=cart_count;
})