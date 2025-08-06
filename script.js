const ringButton = document.querySelectorAll(".ring-button");

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
    productImage.src = `./images/${color}.png`;
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
