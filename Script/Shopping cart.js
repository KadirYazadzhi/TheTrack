














document.addEventListener("DOMContentLoaded", function () {
    var checkoutModal = document.getElementById('checkoutModal');
    var checkoutBtn = document.getElementById('checkoutBtn');
    var closeCheckout = document.querySelector('.modal-content .close');
    var checkoutForm = document.getElementById('checkoutForm');
    var totalPriceCheckout = document.getElementById('totalPriceCheckout');

    checkoutBtn.addEventListener('click', function () {
        checkoutModal.style.display = 'block';
        updateTotalPriceInModal();
    });

    closeCheckout.addEventListener('click', function () {
        checkoutModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });

    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Извлекете информацията от формата и запазете в атрибути
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var address = document.getElementById('address').value;
        var deliveryProvider = document.querySelector('input[name="deliveryProvider"]:checked').value;

        checkoutForm.setAttribute('data-firstname', firstName);
        checkoutForm.setAttribute('data-lastname', lastName);
        checkoutForm.setAttribute('data-phonenumber', phoneNumber);
        checkoutForm.setAttribute('data-address', address);
        checkoutForm.setAttribute('data-deliveryprovider', deliveryProvider);

        // Тук можете да добавите логика за обработка на поръчката
        // Например, изпращане на поръчката към сървъра.
        alert('Your order request has been sent. Expect additional information at the provided email.');
        checkoutModal.style.display = 'none';

        const cartItems = document.getElementById('cartContent');
        cartItems.innerHTML = '';

        // Скриване на количката след изчистване
        const cart = document.getElementById('cart');
        cart.style.right = '-100%';

        const priceRemove = document.getElementById('totalPrice')
        priceRemove.innerHTML = 'Total: 0.00 лв.';
    });

    function updateTotalPriceInModal() {
        var totalPriceInput = document.getElementById('totalPriceCheckout');
        totalPriceInput.innerHTML = 'Total: ' + total.toFixed(2) + ' лв.'
    }
});












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
        var productName = 'Sparco Club J-1';
        var productPrice = 182.00;
        var productImage = 'Снимки/kaska-6.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 2
    var cart2Image = document.getElementById('cart2');
    cart2Image.addEventListener('click', function () {
        var productName = 'Club X1';
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



    // Продукт 33
    var cart33Image = document.getElementById('cart33');
    cart33Image.addEventListener('click', function () {
        var productName = 'OMP Tazio Stringback';
        var productPrice = 80.00;
        var productImage = 'Снимки/gloves-15.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 34
    var cart34Image = document.getElementById('cart34');
    cart34Image.addEventListener('click', function () {
        var productName = 'OMP KS-2 Art';
        var productPrice = 90.00;
        var productImage = 'Снимки/gloves-11.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 35
    var cart35Image = document.getElementById('cart35');
    cart35Image.addEventListener('click', function () {
        var productName = 'Alpinestars Tech 1-K V2';
        var productPrice = 130.00;
        var productImage = 'Снимки/gloves-12.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 36
    var cart36Image = document.getElementById('cart36');
    cart36Image.addEventListener('click', function () {
        var productName = 'Sparco Land';
        var productPrice = 179.99;
        var productImage = 'Снимки/gloves-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 37
    var cart37Image = document.getElementById('cart37');
    cart37Image.addEventListener('click', function () {
        var productName = 'Sparco Land Classic';
        var productPrice = 180.00;
        var productImage = 'Снимки/gloves-5.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 38
    var cart38Image = document.getElementById('cart38');
    cart38Image.addEventListener('click', function () {
        var productName = 'Minus273 Shaolin';
        var productPrice = 180.00;
        var productImage = 'Снимки/gloves-13.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 39
    var cart39Image = document.getElementById('cart39');
    cart39Image.addEventListener('click', function () {
        var productName = 'Minus273 Osaka';
        var productPrice = 180.00;
        var productImage = 'Снимки/gloves-7.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 40
    var cart40Image = document.getElementById('cart40');
    cart40Image.addEventListener('click', function () {
        var productName = 'Minus273 Drip';
        var productPrice = 180.00;
        var productImage = 'Снимки/gloves-8.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 41
    var cart41Image = document.getElementById('cart41');
    cart41Image.addEventListener('click', function () {
        var productName = 'Minus273 Super Villain';
        var productPrice = 180.00;
        var productImage = 'Снимки/gloves-9.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 42
    var cart42Image = document.getElementById('cart42');
    cart42Image.addEventListener('click', function () {
        var productName = 'Minus273 Blitz';
        var productPrice = 180.00;
        var productImage = 'Снимки/gloves-10.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 43
    var cart43Image = document.getElementById('cart43');
    cart43Image.addEventListener('click', function () {
        var productName = 'Minus273 DSC Limited Edition';
        var productPrice = 200.00;
        var productImage = 'Снимки/gloves-14.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 44
    var cart44Image = document.getElementById('cart44');
    cart44Image.addEventListener('click', function () {
        var productName = 'Sparco Futura-Gloves';
        var productPrice = 200.00;
        var productImage = 'Снимки/gloves-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 45
    var cart45Image = document.getElementById('cart45');
    cart45Image.addEventListener('click', function () {
        var productName = 'Sparco Lap';
        var productPrice = 220.00;
        var productImage = 'Снимки/gloves-4.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 46
    var cart46Image = document.getElementById('cart46');
    cart46Image.addEventListener('click', function () {
        var productName = 'Sparco Arrow';
        var productPrice = 299.99;
        var productImage = 'Снимки/gloves-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 47
    var cart47Image = document.getElementById('cart47');
    cart47Image.addEventListener('click', function () {
        var productName = 'Sparco Tide';
        var productPrice = 450.00;
        var productImage = 'Снимки/gloves-6.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 48
    var cart48Image = document.getElementById('cart48');
    cart48Image.addEventListener('click', function () {
        var productName = 'Sparco Meca-3 Mechanics';
        var productPrice = 60.00;
        var productImage = 'Снимки/gloves-mechanic.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 49
    var cart49Image = document.getElementById('cart49');
    cart49Image.addEventListener('click', function () {
        var productName = 'RRS';
        var productPrice = 98.99;
        var productImage = 'Снимки/boots-11.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 50
    var cart50Image = document.getElementById('cart50');
    cart50Image.addEventListener('click', function () {
        var productName = 'Sparco';
        var productPrice = 139.00;
        var productImage = 'Снимки/boots-12.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 51
    var cart51Image = document.getElementById('cart51');
    cart51Image.addEventListener('click', function () {
        var productName = 'Sparco K-Pole';
        var productPrice = 179.99;
        var productImage = 'Снимки/boots-10.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 52
    var cart52Image = document.getElementById('cart52');
    cart52Image.addEventListener('click', function () {
        var productName = 'OMP KS-3';
        var productPrice = 199.99;
        var productImage = 'Снимки/boots-9.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 53
    var cart53Image = document.getElementById('cart53');
    cart53Image.addEventListener('click', function () {
        var productName = 'Alpinestars Tech-1K Start V2';
        var productPrice = 219.99;
        var productImage = 'Снимки/boots-8.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 54
    var cart54Image = document.getElementById('cart54');
    cart54Image.addEventListener('click', function () {
        var productName = 'OMP KS-2 My2021';
        var productPrice = 250.00;
        var productImage = 'Снимки/boots-7.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 55
    var cart55Image = document.getElementById('cart55');
    cart55Image.addEventListener('click', function () {
        var productName = 'Sparco K-Run';
        var productPrice = 259.99;
        var productImage = 'Снимки/boots-6.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 56
    var cart56Image = document.getElementById('cart56');
    cart56Image.addEventListener('click', function () {
        var productName = 'OMP KS-2F';
        var productPrice = 280.00;
        var productImage = 'Image/OMP-KS-2F-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 57
    var cart57Image = document.getElementById('cart57');
    cart57Image.addEventListener('click', function () {
        var productName = 'Alpinestars Tech-1K V2';
        var productPrice = 289.00;
        var productImage = 'Снимки/boots-5.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 58
    var cart58Image = document.getElementById('cart58');
    cart58Image.addEventListener('click', function () {
        var productName = 'Sparco K-Suid';
        var productPrice = 309.99;
        var productImage = 'Image/Sparco-K-Suid-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 59
    var cart59Image = document.getElementById('cart59');
    cart59Image.addEventListener('click', function () {
        var productName = 'Alpinestars Tech-1KX V2';
        var productPrice = 339.99;
        var productImage = 'Снимки/boots-4.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 60
    var cart60Image = document.getElementById('cart60');
    cart60Image.addEventListener('click', function () {
        var productName = 'Sparco K-Formula';
        var productPrice = 360.00;
        var productImage = 'Снимки/boots-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 61
    var cart61Image = document.getElementById('cart61');
    cart61Image.addEventListener('click', function () {
        var productName = 'Alpinestars Kaze Tech-1';
        var productPrice = 400.00;
        var productImage = 'Image/Alpinestars-Kaze-Tech-1-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 62
    var cart62Image = document.getElementById('cart62');
    cart62Image.addEventListener('click', function () {
        var productName = 'OMP KS-1R';
        var productPrice = 509.99;
        var productImage = 'Снимки/boots-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 63
    var cart63Image = document.getElementById('cart63');
    cart63Image.addEventListener('click', function () {
        var productName = 'Alpinestars Tech-1KZ V2';
        var productPrice = 520.00;
        var productImage = 'Снимки/boots-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 64
    var cart64Image = document.getElementById('cart64');
    cart64Image.addEventListener('click', function () {
        var productName = 'Sparco X-Light +';
        var productPrice = 1059.00;
        var productImage = 'Image/Sparco-X-Light-4.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 65
    var cart65Image = document.getElementById('cart65');
    cart65Image.addEventListener('click', function () {
        var productName = 'Zamp FS-9 Solid Kids';
        var productPrice = 220.00;
        var productImage = 'Снимки/helmet2-kids.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 66
    var cart66Image = document.getElementById('cart66');
    cart66Image.addEventListener('click', function () {
        var productName = 'Zamp RZ-62 Kids';
        var productPrice = 800.00;
        var productImage = 'Снимки/helmet1-kids.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 67
    var cart67Image = document.getElementById('cart67');
    cart67Image.addEventListener('click', function () {
        var productName = 'OMP KS-4 Kids';
        var productPrice = 270.00;
        var productImage = 'Снимки/suit2-kids.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 68
    var cart68Image = document.getElementById('cart68');
    cart68Image.addEventListener('click', function () {
        var productName = 'OMP KS-3 Kids';
        var productPrice = 390.00;
        var productImage = 'Снимки/suit1-kids.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 69
    var cart69Image = document.getElementById('cart69');
    cart69Image.addEventListener('click', function () {
        var productName = 'Sparco Rush Kids';
        var productPrice = 80.00;
        var productImage = 'Снимки/gloves2-kids.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 70
    var cart70Image = document.getElementById('cart70');
    cart70Image.addEventListener('click', function () {
        var productName = 'OMP KS-3 Kids - Gloves';
        var productPrice = 100.00;
        var productImage = 'Снимки/gloves1-kids.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 71
    var cart71Image = document.getElementById('cart71');
    cart71Image.addEventListener('click', function () {
        var productName = 'Alpinestars Tech 1-KS Kids';
        var productPrice = 200.00;
        var productImage = 'Снимки/boots2-kids.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 72
    var cart72Image = document.getElementById('cart72');
    cart72Image.addEventListener('click', function () {
        var productName = 'OMP KS-2 Kids';
        var productPrice = 230.00;
        var productImage = 'Снимки/boots1-kids.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 73
    var cart73Image = document.getElementById('cart73');
    cart73Image.addEventListener('click', function () {
        var productName = 'Визьор Zamp Z20 Amber';
        var productPrice = 89.99;
        var productImage = 'Снимки/acs-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 74
    var cart74Image = document.getElementById('cart74');
    cart74Image.addEventListener('click', function () {
        var productName = 'Визьор Zamp Z20 Iridium';
        var productPrice = 119.00;
        var productImage = 'Снимки/acs-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });



    // Продукт 75
    var cart75Image = document.getElementById('cart75');
    cart75Image.addEventListener('click', function () {
        var productName = 'Визьор Zamp Z20 Prism';
        var productPrice = 139.99;
        var productImage = 'Снимки/acs-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 76
    var cart76Image = document.getElementById('cart76');
    cart76Image.addEventListener('click', function () {
        var productName = 'Предпазна яка Sparco K-Ring';
        var productPrice = 119.99;
        var productImage = 'Снимки/acs-6.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 77
    var cart77Image = document.getElementById('cart77');
    cart77Image.addEventListener('click', function () {
        var productName = 'Предпазна яка OMP';
        var productPrice = 159.99;
        var productImage = 'Снимки/acs-7.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 78
    var cart78Image = document.getElementById('cart78');
    cart78Image.addEventListener('click', function () {
        var productName = 'Предпазна яка Alpinestars Youth';
        var productPrice = 280.00;
        var productImage = 'Снимки/acs-5.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 79
    var cart79Image = document.getElementById('cart79');
    cart79Image.addEventListener('click', function () {
        var productName = 'Предпазна кора Sparco SJ Pro K-3';
        var productPrice = 229.99;
        var productImage = 'Снимки/acs-10.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 80
    var cart80Image = document.getElementById('cart80');
    cart80Image.addEventListener('click', function () {
        var productName = 'Предпазна кора Sparco K-Track';
        var productPrice = 709.00;
        var productImage = 'Снимки/acs-9.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 81
    var cart81Image = document.getElementById('cart81');
    cart81Image.addEventListener('click', function () {
        var productName = 'Предпазна кора OMP KS-1 Pro';
        var productPrice = 749.99;
        var productImage = 'Снимки/acs-8.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 82
    var cart82Image = document.getElementById('cart82');
    cart82Image.addEventListener('click', function () {
        var productName = 'Боне OMP KS Summer';
        var productPrice = 49.00;
        var productImage = 'Снимки/acs-12.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 83
    var cart83Image = document.getElementById('cart83');
    cart83Image.addEventListener('click', function () {
        var productName = 'Боне Alpinestars KX V2';
        var productPrice = 49.99;
        var productImage = 'Снимки/acs-11.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 84
    var cart84Image = document.getElementById('cart84');
    cart84Image.addEventListener('click', function () {
        var productName = 'Наколенки Sparco';
        var productPrice = 70.00;
        var productImage = 'Снимки/acs-13.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 85
    var cart85Image = document.getElementById('cart85');
    cart85Image.addEventListener('click', function () {
        var productName = 'Bronze box';
        var productPrice = 999.99;
        var productImage = 'Image/promo-box-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 86
    var cart86Image = document.getElementById('cart86');
    cart86Image.addEventListener('click', function () {
        var productName = 'Silver box';
        var productPrice = 3899.99;
        var productImage = 'Image/promo-box-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 87
    var cart87Image = document.getElementById('cart87');
    cart87Image.addEventListener('click', function () {
        var productName = 'Golden box';
        var productPrice = 4599.99;
        var productImage = 'Image/promo-box-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });




    // Продукт 88
    var cart88Image = document.getElementById('cart88');
    cart88Image.addEventListener('click', function () {
        var productName = 'Diamond box';
        var productPrice = 15000.00;
        var productImage = 'Image/special-box.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


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


