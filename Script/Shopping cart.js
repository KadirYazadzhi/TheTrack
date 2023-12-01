document.addEventListener("DOMContentLoaded", function () {
    var cartIcon = document.getElementById('cartIcon');
    var cart = document.getElementById('cart');
    var closeCart = document.getElementById('closeCart');
    var totalPrice = document.getElementById('totalPrice');
    var cartContent = document.getElementById('cartContent');

    var productsInCart = [];

    function updateTotalPrice() {
        var total = productsInCart.reduce(function (sum, product) {
            return sum + product.price * product.quantity;
        }, 0);
        totalPrice.textContent = 'Total: ' + total.toFixed(2) + ' лв.';
    }

    function addToCart(productName, productPrice, productImage) {
        var existingProduct = productsInCart.find(function (product) {
            return product.name === productName;
        });

        if (existingProduct) {
            existingProduct.quantity++;
            updateProductQuantityInCart(existingProduct);
        } else {
            var product = {
                name: productName,
                price: productPrice,
                quantity: 1
            };
            productsInCart.push(product);

            var productElement = document.createElement('div');
            productElement.classList.add('product');

            var imgElement = document.createElement('img');
            imgElement.src = productImage;
            productElement.appendChild(imgElement);

            var productInfoElement = document.createElement('div');
            productInfoElement.classList.add('product-info');
            productInfoElement.innerHTML =
                '<strong>' + productName + '</strong> ' + productPrice.toFixed(2) + '</strong> лв.'+
                '<br>Количество: <span class="quantity">' + product.quantity + '</span>' +
                '<span class="removeProduct">&#10006; Премахни</span>';


            productElement.appendChild(productInfoElement);

            cartContent.appendChild(productElement);

            var removeButton = productInfoElement.querySelector('.removeProduct');
            removeButton.addEventListener('click', function () {
                cartContent.removeChild(productElement);
                productsInCart = productsInCart.filter(function (p) {
                    return p.name !== productName;
                });
                updateTotalPrice();
            });
        }

        updateTotalPrice();
    }

    function updateProductQuantityInCart(product) {
        var productElement = Array.from(cartContent.children).find(function (element) {
            return element.querySelector('.product-info strong').textContent === product.name;
        });

        if (productElement) {
            var quantitySpan = productElement.querySelector('.quantity');
            quantitySpan.textContent = product.quantity;
        }
    }

    cartIcon.addEventListener('click', function () {
        cart.style.right = '0';
    });

    closeCart.addEventListener('click', function () {
        cart.style.right = '-300px';
    });

    // Продукт 1
    var cart1Image = document.getElementById('cart1');
    cart1Image.addEventListener('click', function () {
        var productName = 'Каска Sparco Club J-1';
        var productPrice = 182.00;
        var productImage = 'Снимки/kaska-6.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 2
    var cart2Image = document.getElementById('cart2');
    cart2Image.addEventListener('click', function () {
        var productName = 'Каска Club X1';
        var productPrice = 207.00;
        var productImage = 'Снимки/kaska-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 3
    var cart3Image = document.getElementById('cart3');
    cart3Image.addEventListener('click', function () {
        var productName = 'OMP Circuit Evo';
        var productPrice = 250.00;
        var productImage = 'Image/OMP-Circuit-Evo-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 4
    var cart4Image = document.getElementById('cart4');
    cart4Image.addEventListener('click', function () {
        var productName = 'Zamp RZ42';
        var productPrice = 649.99;
        var productImage = 'Снимки/kaska-10.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 5
    var cart5Image = document.getElementById('cart5');
    cart5Image.addEventListener('click', function () {
        var productName = 'OMP J-Rally Hans FIA';
        var productPrice = 766.00;
        var productImage = 'Снимки/kaska-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 6
    var cart6Image = document.getElementById('cart6');
    cart6Image.addEventListener('click', function () {
        var productName = 'GP KF-4W CMR';
        var productPrice = 887.00;
        var productImage = 'Снимки/kaska-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 7
    var cart7Image = document.getElementById('cart7');
    cart7Image.addEventListener('click', function () {
        var productName = 'Arai CK-6';
        var productPrice = 1189.99;
        var productImage = 'Снимки/kaska-12%20.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 8
    var cart8Image = document.getElementById('cart8');
    cart8Image.addEventListener('click', function () {
        var productName = 'RRC Protect CMR';
        var productPrice = 1199.99;
        var productImage = 'Снимки/kaska-5.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 9
    var cart9Image = document.getElementById('cart9');
    cart9Image.addEventListener('click', function () {
        var productName = 'Sparco RJ-I FIA';
        var productPrice = 1536.00;
        var productImage = 'Снимки/kaska-4.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 10
    var cart10Image = document.getElementById('cart10');
    cart10Image.addEventListener('click', function () {
        var productName = 'Bell RS7';
        var productPrice = 1700.00;
        var productImage = 'Image/Bell-RS7-Pro-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 11
    var cart11Image = document.getElementById('cart11');
    cart11Image.addEventListener('click', function () {
        var productName = 'Sparco Air KF-7W';
        var productPrice = 1839.00;
        var productImage = 'Снимки/kaska-9.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 12
    var cart12Image = document.getElementById('cart12');
    cart12Image.addEventListener('click', function () {
        var productName = 'Bell KC-7 CMR Fernando Alonso';
        var productPrice = 1999.00;
        var productImage = 'Снимки/kaska-7.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 13
    var cart13Image = document.getElementById('cart13');
    cart13Image.addEventListener('click', function () {
        var productName = 'Bell KC-7 CMR Lewis Hamilton';
        var productPrice = 1999.99;
        var productImage = 'Снимки/kaska-8.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 14
    var cart14Image = document.getElementById('cart14');
    cart14Image.addEventListener('click', function () {
        var productName = 'Bell KC-7 CMR Carbon';
        var productPrice = 2469.99;
        var productImage = 'Снимки/kaska-11.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 15
    var cart15Image = document.getElementById('cart15');
    cart15Image.addEventListener('click', function () {
        var productName = 'Stilo ST5 Carbon';
        var productPrice = 4899.99;
        var productImage = 'Image/Stilo-ST5-FN-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 16
    var cart16Image = document.getElementById('cart16');
    cart16Image.addEventListener('click', function () {
        var productName = 'Bell HP77';
        var productPrice = 11199.99;
        var productImage = 'Image/Bell-HP77-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 17
    var cart17Image = document.getElementById('cart17');
    cart17Image.addEventListener('click', function () {
        var productName = 'Sparco Rookie';
        var productPrice = 200.00;
        var productImage = 'Снимки/suit-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 18
    var cart18Image = document.getElementById('cart18');
    cart18Image.addEventListener('click', function () {
        var productName = 'Sparco Thunder';
        var productPrice = 350.00;
        var productImage = 'Снимки/suit-12.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 19
    var cart19Image = document.getElementById('cart19');
    cart19Image.addEventListener('click', function () {
        var productName = 'Sparco Kerb';
        var productPrice = 449.99;
        var productImage = 'Снимки/suit-11.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 20
    var cart20Image = document.getElementById('cart20');
    cart20Image.addEventListener('click', function () {
        var productName = 'OMP Sport';
        var productPrice = 650.00;
        var productImage = 'Снимки/suit-6.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 21
    var cart21Image = document.getElementById('cart21');
    cart21Image.addEventListener('click', function () {
        var productName = 'Alpinestars KMX-5 V2';
        var productPrice = 700.00;
        var productImage = 'Снимки/suit-13.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 22
    var cart22Image = document.getElementById('cart22');
    cart22Image.addEventListener('click', function () {
        var productName = 'OMP First S';
        var productPrice = 799.99;
        var productImage = 'Снимки/suit-7.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 23
    var cart23Image = document.getElementById('cart23');
    cart23Image.addEventListener('click', function () {
        var productName = 'Sparco Futura';
        var productPrice = 999.99;
        var productImage = 'Снимки/suit-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 24
    var cart24Image = document.getElementById('cart24');
    cart24Image.addEventListener('click', function () {
        var productName = 'OMP First Elle';
        var productPrice = 1000.00;
        var productImage = 'Снимки/suit-8.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 25
    var cart25Image = document.getElementById('cart25');
    cart25Image.addEventListener('click', function () {
        var productName = 'OMP KS-Art Lamborghini';
        var productPrice = 1050.00;
        var productImage = 'Снимки/suit-14.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 26
    var cart26Image = document.getElementById('cart26');
    cart26Image.addEventListener('click', function () {
        var productName = 'KS-2 Art Custom Design';
        var productPrice = 1200.00;
        var productImage = 'Снимки/suit-custom%20design.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 27
    var cart27Image = document.getElementById('cart27');
    cart27Image.addEventListener('click', function () {
        var productName = 'OMP Classic';
        var productPrice = 1300.00;
        var productImage = 'Снимки/suit-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 28
    var cart28Image = document.getElementById('cart28');
    cart28Image.addEventListener('click', function () {
        var productName = 'Sparco Competition Vintage';
        var productPrice = 1450.00;
        var productImage = 'Снимки/suit-10.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 29
    var cart29Image = document.getElementById('cart29');
    cart29Image.addEventListener('click', function () {
        var productName = 'OMP One Art';
        var productPrice = 2550.00;
        var productImage = 'Снимки/suit-9.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 30
    var cart30Image = document.getElementById('cart30');
    cart30Image.addEventListener('click', function () {
        var productName = 'Sparco Superleggera';
        var productPrice = 2649.99;
        var productImage = 'Снимки/suit-4.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 31
    var cart31Image = document.getElementById('cart31');
    cart31Image.addEventListener('click', function () {
        var productName = 'Sparco Prime';
        var productPrice = 3610.00;
        var productImage = 'Снимки/suit-5.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 32
    var cart32Image = document.getElementById('cart32');
    cart32Image.addEventListener('click', function () {
        var productName = 'Sparco Martini';
        var productPrice = 350.00;
        var productImage = 'Снимки/suit-mechanic.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });
});