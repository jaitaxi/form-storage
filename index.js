let products = JSON.parse(localStorage.getItem('data')) || []
console.log("products", products);

const uiMaker = () => {
    document.getElementById("box").innerHTML = ""
    products.map((ele,index) => {
        let title = document.createElement("h1")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("p")
        price.innerHTML = ele.price

        let btn = document.createElement("button")
        btn.innerHTML = "Delete"
        btn.addEventListener("click", () => {
            products.splice(index,1)
            localStorage.setItem("data", JSON.stringify(products));
            uiMaker()
        })

        let div = document.createElement("div")
        div.append(img, title, price,btn)
        
        document.getElementById("box").append(div)
    })


}


uiMaker()


const HanddleData = (e) => {
    e.preventDefault();


    let data = {
        title: document.getElementById('title').value,
        img: document.getElementById('url').value,
        price: document.getElementById('price').value,

    }
    console.log(data);
    products.push(data);

    localStorage.setItem("data", JSON.stringify(products));

    uiMaker()
}


document.getElementById("form").addEventListener("submit", HanddleData)