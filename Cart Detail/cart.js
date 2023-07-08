let productArr = []

diplayProduct(productArr)

function diplayProduct() {
    // document.querySelector("#display_product").innerHTML = ""
    productArr.forEach((elem) => {
        let div = document.createElement("div")
        div.setAttribute("id", "productContainer")

        let img = document.createElement("img")
        img.setAttribute("id", "img")
        img.setAttribute("src", elem.img_url)

        let name = document.createElement("h3")
        name.textContent = elem.name
        name.setAttribute("id", "name")

        let price = document.createElement("p")
        price.setAttribute("id", "price")
        price.textContent = elem.price

        let mrp = document.createElement("p")
        mrp.setAttribute("id", "mrp")
        mrp.textContent = elem.mrp

        let divQnt = document.createElement("div")
        divQnt.setAttribute("id", "divQnt")

        let lessBtn = document.createElement("button")
        lessBtn.setAttribute("id", "btn1")
        lessBtn.textContent = "-"

        let span = document.createElement("span")
        span.setAttribute("id", "spanQnt")
        span.textContent = elem.quantity

        let highBtn = document.createElement("button")
        highBtn.setAttribute("id", "btn2")
        highBtn.textContent = "+"

        divQnt.append(lessBtn, span, highBtn)

        let mrpDiv = document.createElement("div")
        mrpDiv.setAttribute("id", "finalPrice")
        mrpDiv.textContent = elem.mrp

        let delBtn = document.createElement("button")
        delBtn.innerText = "Remove"
        delBtn.addEventListener("click", function() {
            delData(element , index)
        })

        div.append(img, name, price, mrp, divQnt, mrpDiv)

        document.querySelector("#display_product").append(div)
    })
}

function delData(element, index) {
    productArr.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(productArr))
    diplayProduct(productArr)
}

document.querySelector("#submit").addEventListener("click", checkOut)

function checkOut() {
    window.location.href = "checkout.html"
}