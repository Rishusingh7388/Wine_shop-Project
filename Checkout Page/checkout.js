document.querySelector("#add").addEventListener("click", myDetail)

function myDetail() {
    event.preventDefault()

    if(input === null) {
        alert("Please fill all credentials")
    }else{
        window.location.href = "cart.html"
    }
}

myDetail()