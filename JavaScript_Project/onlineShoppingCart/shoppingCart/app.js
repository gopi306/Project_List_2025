const productContainer = document.querySelector(".products-container");
const cartContainer = document.querySelector(".addToCartContainer");
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "phone",
    price: 20000,
  },
  {
    id: 3,
    name: "Tab",
    price: 10000,
  },
  {
    id: 4,
    name: "SmartWatch",
    price: 1000,
  },
  {
    id: 5,
    name: "HeadPhones",
    price: 500,
  },
];

// console.log(products[0]);

products.forEach((products) => {
  const { id, name, price } = products;
  // <div class="product-row">
  //   <p>LapTop - Rs.50000</p>
  //   <button>Add to item</button>
  //    </div>

  // const productRow = `<div class="product-row">
  //    <p>${products.name} - Rs. ${products.price} </p>
  //    <button>Add to item</button>
  //    </div>`;
  //    productContainer.insertAdjacentHTML('beforeend',productRow);

  // ! Create a div element and className using DOM Elements
  const divEle = document.createElement("div");
  divEle.className = "product-row";
  divEle.innerHTML = `
    <p>${products.name} - Rs. ${products.price} </p>
     <button  onclick="addTocart(${id})" >Add to item</button>
   `;
  productContainer.appendChild(divEle);
});
//?!  ADD TO CART

const cart = [];

function addTocart(id) {
  const productToAdd = products.find((product) => {
    return product.id === id;
  });

  cart.push(productToAdd);
  console.log(cart);

  renderCart();
  // const productAddContainer = `
  //   <div class="product-row">
  //     <p>${name} - Rs.${price} </p>
  //     <button onclick="removeFromCart(${id})">RemoveItem</button>
  //     </div>
  //     `;
  // cartContainer.insertAdjacentHTML("beforeend", productAddContainer);
}


// Remove product from cart
function removeFromCart(id) {
  cart.splice(id, 1);
  renderCart();
}

function renderCart() {
   // ✅ Clear previous cart before re-render
  cartContainer.innerHTML = "";
  cart.forEach((item, id) => {
    const productAddContainer = `
    <div class="product-row">
      <p>${item.name} - Rs.${item.price} </p>
      <button onclick="removeFromCart(${id})">RemoveItem</button>
      </div>
      `;
    cartContainer.insertAdjacentHTML("beforeend", productAddContainer);
  });
}
