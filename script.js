let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');

})


 let products = [
    {
        id: 1,
        name: 'Stumps',
        image: 'stump.jpg',
        price: 500
    },
    {
        id: 2,
        name: 'Green Mat ',
        image: 'mat.jpg',
        price: 650
    },
    {
        id: 3,
        name: 'Bails',
        image: 'bails1.jpg',
        price: 200
    },
    {
        id: 4,
        name: 'Kookabura bat',
        image: 'bat kokku.jpg',
        price: 3000
    },
    {
        id: 5,
        name: 'MRF',
        image: 'mrf.jpg',
        price: 7200
    },
    {
        id: 6,
        name: 'Kingssport',
        image: 'kingssport.jpg',
        price: 8000
    },
    {
        id: 7,
        name: 'Stumper ball',
        image: 'stumpera.jpg',
        price: 40
    },
    {
        id: 8,
        name: 'Batting pad',
        image: 'batting pad.jpg',
        price: 750
    },
    {
        id: 9,
        name: 'Thigh Pad',
        image: 'thigh pad.jpg',
        price: 1350
    },
    {
        id: 8,
        name: 'Hand gloves',
        image: 'gloves.jpg',
        price: 850
    },
    {
        id: 8,
        name: 'Elbow Guard',
        image: 'elbows.jpg',
        price: 700
    },
    {
        id: 8,
        name: 'Cricket Helmet',
        image: 'helmet.jpg',
        price: 1200
    },
    
    
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
