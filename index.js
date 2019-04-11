var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100) + 1
  }
  getCart().push(newItem);
  return `${item} has been added to your cart.`
}
  

function viewCart() {
  var array = [];
  if (cart.length === 1) {
    for (let i=0; i < getCart().length; i++) {
    array.push(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`);
    } 
  } else if ( getCart().length > 1) {
    array.push(`In your cart, you have`);
    for (let i=0; i < getCart().length - 1; i++) {
    array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice},`)
    }
    array.push(`and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}.`)
    }
else {
  return `Your shopping cart is empty.`
}
return array.join(" ")
}

function total() {
  let total = 0;
  for(let i=0; i < getCart().length; i++) {
    total = total + getCart()[i].itemPrice;
  }
  return total;
}


function removeFromCart(item) {
  let removeItem = ""
  for (let i = 0; getCart().length; i++)
  if (item === getCart()[i].itemName) {
    removeItem = getCart()[i];
    return cart
  }
  if (removeItem) {
    let index = getCart().indexOf(removeItem)
    getCart().splice(index,1)
  }
  else {
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === "") {
    return `Sorry, we don't have a credit card on file for you.`
  }
  else {
    cart = [];
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
}
