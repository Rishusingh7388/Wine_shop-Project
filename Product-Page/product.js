
let url = "http://localhost:3000/vines"
getWineData()
async function getWineData(){
  try{

    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    displayWines(data)



  }
  catch(err){
    console.log(err)
  }
}










function displayWines(data){
    document.getElementById("product-div").textContent =""  //container
    data.map((elem)=>{
        let div = document.createElement("div") 
        div.setAttribute("id", "box") 

        let offDiv = document.createElement("div")
        offDiv.setAttribute("id", "offDiv")

        let h2= document.createElement("h2")
        h2.setAttribute("id", "H2")
        h2.textContent = `${elem.off}%`
        offDiv.append(h2)
           
        let anchor = document.createElement("a")
        anchor.setAttribute("id", "anchor")

        anchor.setAttribute("href", "proDesc.html")
        anchor.setAttribute("target", "_blank")
       
        let image = document.createElement("img")
        image.setAttribute("src", elem.img_url)
        image.setAttribute("id", "images")
        anchor.append(image)
        image.addEventListener("click",function(){
            gotoProDesc(elem)
        })



        let desc = document.createElement("p")
        desc.textContent = elem.name
        desc.setAttribute("id", "desc")

        let concg = document.createElement("div")
        concg.setAttribute("id", "concg")
        let country = document.createElement("p")
        country.textContent = elem.country
        let category = document.createElement("p")
        category.textContent = elem.category
        
        concg.append(country, category)
       


        let pc_Div = document.createElement("div")
        pc_Div.setAttribute("id", "pcDiv")
        let price = document.createElement("p")
        price.textContent = "₹" + elem.price
        price.setAttribute("id", "price")
        
        let pBtn = document.createElement("p")
        pBtn.setAttribute("id", "pBtn")
        let button = document.createElement("button")
        button.textContent  = "Add"
        button.setAttribute("id", "btn")
        button.addEventListener("click", function(){
            setTocart(elem)
            alert("Added to Cart")
            window.location.href = "cart.html"

        })
        pBtn.append(button)

       

        pc_Div.append(price, pBtn)

        // let rating = document.createElement("p")
        // rating.textContent = elem.rating
        // rating.setAttribute("id", "rating")
       
        // let btnDiv = document.createElement("div")
        // btnDiv.setAttribute("id", "btnDiv")
        
        // let anc = document.createElement("a")
        
       
    

        // let icon = document.createElement("i")
        // icon.setAttribute("class", "fa-regular  fa-heart");

        // btnDiv.append(icon, button)

       div.append(offDiv,anchor, desc, concg,  pc_Div)
       
       document.getElementById("product-div").append(div)


    })
}
