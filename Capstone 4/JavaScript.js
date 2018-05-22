var names = [];
var prices = [];



function Addcart(name, price){
    names.push(name);
    prices.push(price);

    document.getElementById('cart').innerHTML += `<tr><td>${name}</td><td>${price}</td></tr>`;//the + meaning you want it to keep adding into the cart
    totalcart();
}

function totalcart()//methods
{
    var subtotal = 0;
    for (var i in prices) {
        subtotal += prices[i];

    }

    var total = subtotal * 1.06;

    document.getElementById('total').innerHTML = `subtotal = ${subtotal.toFixed(2)} <br />total = ${total.toFixed(2)}`;//round it to 2 decimal places
    countcart();
}


function countcart()
{
    var totalcount = 0;
    for (var i in cart)
    {
        totalcount += cart[i].count;

    }
}

