document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cartIcon");
    const cart = document.getElementById("cart");
    const closeCart = document.getElementById("closeCart");
    const totalPrice = document.getElementById("totalPrice");
    const cartContent = document.getElementById("cartContent");

    const productsInCart = [];

    function updateTotalPrice() {
        let total = productsInCart.reduce(function (sum, product) {
            return sum + product.price * product.quantity;
        }, 0);
        totalPrice.textContent = 'Total: ' + total.toFixed(2) + ' лв.';
    }
    function addToCart(productName, productPrice, productImage) {
        const existingProduct = productsInCart.find(function (product) {
            return product.name === productName;
        });

        if (existingProduct) {
            existingProduct.quantity++;
            updateProductQuantityInCart(existingProduct);
        } else {
            const product = {
                name: productName,
                price: productPrice,
                quantity: 1,
                image: productImage
            };
            productsInCart.push(product);

            const productElement = document.createElement('div');
            productElement.classList.add('product');

            const imgElement = document.createElement('img');
            imgElement.src = productImage;
            productElement.appendChild(imgElement);

            const productInfoElement = document.createElement('div');
            productInfoElement.classList.add('product-info');
            productInfoElement.innerHTML =
                '<strong>' + productName + '</strong> ' + productPrice.toFixed(2) + '</strong> лв.' +
                '<br>Количество: <span class="quantity">' + product.quantity + '</span>' +
                '<span class="removeProduct">&#10006; Премахни</span>';

            productElement.appendChild(productInfoElement);
            cartContent.appendChild(productElement);

            const removeButton = productInfoElement.querySelector('.removeProduct');
            removeButton.addEventListener('click', function () {
                cartContent.removeChild(productElement);
                productsInCart.splice(productsInCart.indexOf(product), 1);
                updateTotalPrice();
            });
        }

        updateTotalPrice();
    }

    function updateProductQuantityInCart(product) {
        const productElement = Array.from(cartContent.children).find(function (element) {
            return element.querySelector('.product-info strong').textContent === product.name;
        });

        if (productElement) {
            const quantitySpan = productElement.querySelector('.quantity');
            quantitySpan.textContent = product.quantity;
        }
    }

    cartIcon.addEventListener('click', function () {
        cart.style.right = '0';
    });

    closeCart.addEventListener('click', function () {
        cart.style.right = '-300px';
    });

    // Продукт 89
    const cart89Image = document.getElementById('cart89');
    cart89Image.addEventListener('click', function () {
        const productName = 'White T-Shirt with logo';
        const productPrice = 20.00;
        const productImage = 'Снимки/t-shirt-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });






// Продукт 90
    const cart90Image = document.getElementById('cart90');
    cart90Image.addEventListener('click', function () {
        const productName = 'White T-shirt Design 1';
        const productPrice = 20.00;
        const productImage = 'Снимки/white-t-shirt-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




// Продукт 91
    const cart91Image = document.getElementById('cart91');
    cart91Image.addEventListener('click', function () {
        const productName = 'White T-shirt Design 2';
        const productPrice = 20.00;
        const productImage = 'Снимки/t-shirt-white-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




// Продукт 92
    const cart92Image = document.getElementById('cart92');
    cart92Image.addEventListener('click', function () {
        const productName = 'Black T-shirt with logo';
        const productPrice = 20.00;
        const productImage = 'Снимки/t-shirt-black-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });





// Продукт 93
    const cart93Image = document.getElementById('cart93');
    cart93Image.addEventListener('click', function () {
        const productName = 'Black T-shirt  Design 1';
        const productPrice = 20.00;
        const productImage = 'Снимки/t-shirt-black-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });





// Продукт 94
    const cart94Image = document.getElementById('cart94');
    cart94Image.addEventListener('click', function () {
        const productName = 'Black T-shirt Design 2';
        const productPrice = 20.00;
        const productImage = 'Снимки/t-shirt-black-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



// Продукт 95
    const cart95Image = document.getElementById('cart95');
    cart95Image.addEventListener('click', function () {
        const productName = 'Black hoodie Design 1';
        const productPrice = 35.00;
        const productImage = 'Снимки/black-hoodie-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




// Продукт 96
    const cart96Image = document.getElementById('cart96');
    cart96Image.addEventListener('click', function () {
        const productName = 'Black hoddie Design 2';
        const productPrice = 35.00;
        const productImage = 'Снимки/hoodie-black.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



// Продукт 97
    const cart97Image = document.getElementById('cart97');
    cart97Image.addEventListener('click', function () {
        const productName = 'Black hoodie Design 3';
        const productPrice = 35.00;
        const productImage = 'Снимки/black-hoodie-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




// Продукт 98
    const cart98Image = document.getElementById('cart98');
    cart98Image.addEventListener('click', function () {
        const productName = 'White hoodie Design 1';
        const productPrice = 35.00;
        const productImage = 'Снимки/white-hoodie.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



// Продукт 99
    const cart99Image = document.getElementById('cart99');
    cart99Image.addEventListener('click', function () {
        const productName = 'White hoodie Design 2';
        const productPrice = 35.00;
        const productImage = 'Снимки/white-hoodie-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




// Продукт 100
    const cart100Image = document.getElementById('cart100');
    cart100Image.addEventListener('click', function () {
        const productName = 'White hoodie Design 3';
        const productPrice = 35.00;
        const productImage = 'Снимки/white-hoodie-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




// Продукт 101
    const cart101Image = document.getElementById('cart101');
    cart101Image.addEventListener('click', function () {
        const productName = 'White shoes (Converse) Design 1';
        const productPrice = 50.00;
        const productImage = 'Снимки/converse-boots-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';

    });




// Продукт 102
    const cart102Image = document.getElementById('cart102');
    cart102Image.addEventListener('click', function () {
        const productName = 'White shoes (Converse) Design 2';
        const productPrice = 45.00;
        const productImage = 'Снимки/converse-boots-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




// Продукт 103
    const cart103Image = document.getElementById('cart103');
    cart103Image.addEventListener('click', function () {
        const productName = 'White shoes';
        const productPrice = 65.00;
        const productImage = 'Снимки/Shoes-white.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    const cancelBtn = document.getElementById('cancelBtn');
    cancelBtn.addEventListener('click', function () {
        // Изчистване на количката
        clearCart();
    });

    function clearCart() {
        // Изчистване на съдържанието на количката
        // Пример: ако вашата количка е списък с id "cartItems"
        const cartItems = document.getElementById('cartContent');
        cartItems.innerHTML = '';

        // Скриване на количката след изчистване
        const cart = document.getElementById('cart');
        cart.style.right = '-100%';

        const priceRemove = document.getElementById('totalPrice')
        priceRemove.innerHTML = 'Total: 0.00 лв.';
    }

});

