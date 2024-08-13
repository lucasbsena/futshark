function searchProducts() {
    let input = document.getElementById('search').value.toLowerCase();
    let products = document.getElementsByClassName('mover');

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let text = product.textContent || product.innerText;
        if (text.toLowerCase().indexOf(input) > -1) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('search').addEventListener('keyup', searchProducts);
});


let cart;

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
} else {
    cart = [];
}


function addCart(productName, productPrice) {
    
    let product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Verificar se o produto já está no carrinho
    let existingProduct = cart.find(item => item.name === product.name);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} foi adicionado ao carrinho!`);
}