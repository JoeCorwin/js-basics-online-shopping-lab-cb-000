var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randNum = Math.floor((Math.random() * 100)+1);
  var newItem = {
    itemName: item,
    itemPrice: randNum,
  };
 if (cart.push(newItem)) {
   return `${item} has been added to your cart.`
 }
}


function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var output = "In your cart, you have "
  for(var i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
      output += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
    } else if (cart.length === 2) {
        if (i === 0) {
          output += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
        } else {
          output += `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
        }
    } else {
        if (i === 0) {
          output += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
        } else if (i !== cart.length - 1) {
          output += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
        } else {
          output += `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
        }
      }
    }
    return output
  }



// cart = [
//   {itemName: 'slippers',itemPrice: 16},
//   {itemName: 'clogs',itemPrice: 12},
//   {itemName: 'sneakers',itemPrice: 12},
//   {itemName: 'frogs',itemPrice: 1},
//   {itemName: 'ghosts',itemPrice: 19},
// ]

function total() {
  let priceArray = cart.map(a => a.itemPrice);
  var sum = priceArray.reduce((a, b) => a + b, 0);
  return sum
}


function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].itemName === item) {
        cart.splice(i,1)
        return cart
      }
    }
    return "That item is not in your cart."
  }


function placeOrder(cardNumber) {
    if (cardNumber === undefined) {
      return "Sorry, we don't have a credit card on file for you."
    } else {
      return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    }
      setCart()
  }  
