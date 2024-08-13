
 function updateCartDisplay() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');

   
    cartItems.innerHTML = '';

   
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

  
    cartTotal.textContent = `Total: R$${total.toFixed(2)}`;
}


document.addEventListener('DOMContentLoaded', updateCartDisplay);

function remove() {

    
        localStorage.removeItem('cart');
        updateCartDisplay();
}

function finish() {

    localStorage.removeItem('cart');
    updateCartDisplay();
    alert("Compra finalizada")
}