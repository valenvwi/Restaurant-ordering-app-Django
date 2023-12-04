let cartItems = [];

const handleButtonClick = () => {
  console.log("Added");
};

const handleAddToCart = (id, name) => {
  const existingItem = cartItems.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ id: id, quantity: 1 });
  }

  console.log("cartItems: ", cartItems);
};
