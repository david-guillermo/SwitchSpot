const products = [
    { id: 1, name: 'Teclado Gamer 1', price: 50, image: 'keyboard1.jpg' },
    { id: 2, name: 'Teclado Gamer 2', price: 70, image: 'keyboard2.jpg' },
    { id: 3, name: 'Teclado Gamer 3', price: 60, image: 'keyboard3.jpg' },
];

let cart = [];

// Display Products
const productContainer = document.getElementById('product-list');
if (productContainer) {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Añadir al Carrito</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert('Producto añadido al carrito');
    updateCart();
}

// Display Cart
const cartContainer = document.getElementById('cart-list');
if (cartContainer) {
    updateCart();
}

function updateCart() {
    if (cartContainer) {
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button onclick="removeFromCart(${item.id})">Eliminar</button>
            `;
            cartContainer.appendChild(cartItem);
        });
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Checkout
const checkoutButton = document.getElementById('checkout-button');
if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
}

const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Pago realizado con éxito');
        cart = [];
        window.location.href = 'index.html';
    });
}
