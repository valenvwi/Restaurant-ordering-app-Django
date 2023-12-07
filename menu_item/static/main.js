let cartItems = getCartFromCookies() || [];

const handleAddToCart = (id, image, price, name, inputQuantity) => {
  inputQuantity = parseInt(inputQuantity);

  quantity !== 1 ? (inputQuantity = quantity) : (inputQuantity = 1);

  const existingItem = cartItems.find((item) => item.id === id);
  console.log("id, name, inputQuantity: ", id, name, inputQuantity);

  if (existingItem) {
    existingItem.inputQuantity += inputQuantity;
  } else {
    cartItems.push({ id: id, image: image, price: price, inputQuantity: inputQuantity, name: name });
  }

  console.log("cartItems: ", cartItems);

  // Save cart details to cookies
  saveCartToCookies(cartItems);
};

const minusButton = document.getElementById('minusButton');
const plusButton = document.getElementById('plusButton');
const quantityDisplay = document.getElementById('quantityDisplay');

let quantity = 1;

minusButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity -= 1;
        updateQuantityDisplay();
    }
});

plusButton.addEventListener('click', () => {
    quantity += 1;
    updateQuantityDisplay();
});

function updateQuantityDisplay() {
    quantityDisplay.textContent = `Qty: ${quantity}`;
}

function saveCartToCookies(cart) {
  const jsonCart = JSON.stringify(cart);
  document.cookie = `cart=${jsonCart}; expires=${getExpirationDate()}; path=/`;
}

function getCartFromCookies() {
  const cookies = document.cookie.split(';');
  const cartCookie = cookies.find(cookie => cookie.trim().startsWith('cart='));
  if (cartCookie) {
    const cartJson = cartCookie.split('=')[1];
    return JSON.parse(cartJson);
  }
  return null;
}

function getExpirationDate() {
  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);
  return expirationDate.toUTCString();
}
