console.log('java(script) time');

const iceCream = [{
    name: "cookiedough",
    image: 'https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    price: 5
}, {
    name: "strawberry",
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    price: 10
}, {
    name: "chocolate",
    image: 'https://images.unsplash.com/photo-1628585352636-f4a24c2e17d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    price: 5
}]
const toppings = [{
    name: "sprinkles",
    image: 'https://images.unsplash.com/photo-1628585352636-f4a24c2e17d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    price: 1
}, {
    name: "chocolateChips",
    image: 'https://images.unsplash.com/photo-1563589173312-476d8c36b242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80',
    price: 2
}]
const cones = [{
    name: "waffleCone",
    image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    price: 3
}, {
    name: "chocolateCone",
    image: 'https://images.unsplash.com/photo-1614014077943-840960ce6694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    price: 4
}]

let orders = []

function drawIceCream() {
    let template = ''
    iceCream.forEach(item => {
        template += `
            <div class="col-4 iceCream-item p-2" onclick="order('${item.name}')" >
                <img class="img-fluid imaginee"
                    src="${item.image}"
                    alt="">
                    <p class=" iceCream-name bg-info text-light text-center">${item.name}</p>
                    <p class=" price bg-info text-light text-center">$${item.price}</p>
                </div>

                `})
    let iceCreamElm = document.getElementById('iceCream')
    console.log(iceCreamElm);
    iceCreamElm.innerHTML = template
}
drawIceCream()

function drawToppings() {
    let template = ''
    toppings.forEach(item => {
        template += `
            <div class="col-6 toppings p-2" onclick="order('${item.name}')" >
                <img class="img-fluid imaginee"
                    src="${item.image}"
                    alt="">
                    <p class=" toppings bg-info text-light text-center">${item.name}</p>
                    <p class=" price bg-info text-light text-center">$${item.price}</p>
                </div>

                `})
    let toppingsElm = document.getElementById('toppings')
    console.log(toppingsElm);
    toppingsElm.innerHTML = template
}
drawToppings()

function drawCones() {
    let template = ''
    cones.forEach(item => {
        template += `
            <div class="col-6 cones p-2" onclick="order('${item.name}')" >
                <img class="img-fluid imaginee"
                    src="${item.image}"
                    alt="">
                    <p class=" cones-name bg-info text-light text-center">${item.name}</p>
                    <p class=" price bg-info text-light text-center">$${item.price}</p>
                </div>

                `})
    let conesElm = document.getElementById('cones')
    console.log(conesElm);
    conesElm.innerHTML = template
}
drawCones()

function drawOrders() {
    let template = ''
    orders.forEach((order, i) => template += `
    <div class="col-6 order-item" onclick="deleteItem(${i})">
                    <p>${order.name}</p>
    </div>
    `)
    let orderElm = document.getElementById('order')
    orderElm.innerHTML = template
    drawTotal()
}
function drawTotal() {
    let subtotal = 0
    orders.forEach(order => subtotal += order.price)
    console.log('subtotal', subtotal);
    let totalElm = document.getElementById('total')

    subtotal *= 1.06
    totalElm.innerText = subtotal.toFixed(2)
}




function order(selectedName) {
    console.log('ordering', selectedName);
    let foundItem = iceCream.find(items => items.name == selectedName)
    console.log(foundItem)
    orders.push(foundItem)
    console.log('current orders', orders)
    drawOrders()

}




