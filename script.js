const ringButton = document.querySelectorAll(".ring-button");
const productImageBase = "./images/";
for (let i = 0; i < ringButton.length; i++) {
  const ringBtn = ringButton[i];
  ringBtn.addEventListener("click", function (event) {
    // get button id for color
    const color = event.target.id.replace("-color", "");
    // cheeck previuse border
    for (let j = 0; j < ringButton.length; j++) {
      ringButton[j].classList.remove("border-purple-700");
    }

    //add color
    event.target.classList.add("border-purple-700");

    // get product image
    const productImage = document.getElementById("product-image");
    productImage.src = `${productImageBase}${color}.png`;
  });
}

// size button functionality
function selectSize(size) {
  const sizes = ["S", "M", "L", "XL"];
  for (let i = 0; i < sizes.length; i++) {
    const button = document.getElementById("size-" + sizes[i]);
    const element = sizes[i];
    if (size === element) {
      button.classList.add("border-purple-700");
    } else {
      button.classList.remove("border-purple-700");
    }
  }
}

// product quentity increment and decrement
const quentityElements = document.querySelectorAll(".quantity-button");
for (let btn of quentityElements) {
  btn.addEventListener("click", function (event) {
    const amount = event.target.innerText === "+" ? 1 : -1;
    console.log(amount);
    const currentQuantity = parseInt(
      document.getElementById("quantity").innerText
    );
    const newQuantity = Math.max(0, currentQuantity + amount);
    document.getElementById("quantity").innerText = newQuantity;
  });
}

// add to cart functionality
const cartItems = [];
const addToCartButton = document.getElementById("add-to-cart");
addToCartButton.addEventListener("click", function () {
  const checkoutContainer = document.getElementById("checkout-container");
  const quantity = parseInt(document.getElementById("quantity").innerText);
  if (quantity > 0) {
    checkoutContainer.classList.remove("hidden");
    const cartCount = document.getElementById("cart-count");
    cartCount.innerText = quantity;
    //
    const selectedColorButton = document.querySelector(
      "button.border-purple-700.w-6"
    );
    const selectedColor = selectedColorButton.id.split("-")[0];
    const selectedSizeButton = document.querySelector(
      "button.border-purple-700:not(.w-6"
    );
    // console.log(selectedSizeButton.innerText);
    const selectedSize = selectedSizeButton.innerText.split(" ")[0];
    const selectedPrice = selectedSizeButton.innerText
      .split(" ")[1]
      .split("$")[1];
    cartItems.push({
      image: selectedColor + ".png",
      title: "Classy Modern Smart Watch",
      color: selectedColor,
      size: selectedSize,
      price: selectedPrice,
      quantity: quantity,
      total: selectedPrice * quantity,
    });
    console.log(cartItems);
  } else {
    alert("Please select a size and quantity.");
  }
});

document.getElementById("checkout-btn").addEventListener("click", function () {
  const cartModal = document.getElementById("cart-modal");

  const cartContainer = document.getElementById("cart-items");
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    const tableRow = document.createElement("tr");
    tableRow.classList.add("border-b");
    tableRow.innerHTML = `
    <td>
      <div class="flex items-center space-x-2">
       <img  class="w-16 h-16 object-contain" src=${productImageBase}${item.image}  alt=${item.image}}>
       <span class="font-semibold">${item.title}</span>
       <span>${item.color}</span>
       <span>${item.size}</span>
       <span>${item.quantity}</span>
       <span>${item.price}</span>
       </div>
    </td>
    `;
    cartContainer.appendChild(tableRow);
  }

  cartModal.classList.remove("hidden");
});
