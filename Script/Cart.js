document.addEventListener("DOMContentLoaded", function () {
    var cartIcon = document.getElementById('iconCart');
    var cart = document.getElementById('cart');
    var closeCart = document.getElementById('closeCart');
    var totalPrice = document.getElementById('totalPrice');
    var cartContent = document.getElementById('cartContent');
    var productsInCart = [];

    function updateTotalPrice() {
        var total = productsInCart.reduce(function (sum, product) {
            return sum + product.price * product.quantity;
        }, 0);
        totalPrice.textContent = 'Total: ' + '$' + total.toFixed(2);
    }

    function addToCart(productName, productPrice, productImage, quantity) {
        var existingProduct = productsInCart.find(function (product) {
            return product.name === productName;
        });

        if (existingProduct) {
            existingProduct.quantity += quantity || 1;
            updateProductQuantityInCart(existingProduct);
        } else {
            var product = {
                name: productName,
                price: productPrice,
                quantity: quantity || 1,
                image: productImage
            };
            productsInCart.push(product);

            var productElement = document.createElement('div');
            productElement.classList.add('productNew');

            var imgElement = document.createElement('img');
            imgElement.src = productImage;
            productElement.appendChild(imgElement);

            var productInfoElement = document.createElement('div');
            productInfoElement.classList.add('productNew-info');
            productInfoElement.innerHTML =
                '<strong>' + productName + '</strong> ' + '<strong class="product-price-other-class">' + '$' + productPrice.toFixed(2) + ' </strong>' +
                '<b>Количество:</b> <span  style="margin-left: 10px" class="quantity">' + product.quantity + '</span>' +
                '<span class="removeProduct">&#10006;</span>';

            productElement.appendChild(productInfoElement);

            cartContent.appendChild(productElement);

            var removeButton = productInfoElement.querySelector('.removeProduct');
            removeButton.addEventListener('click', function () {
                cartContent.removeChild(productElement);
                productsInCart = productsInCart.filter(function (p) {
                    return p.name !== productName;
                });
                updateTotalPrice();
                updateLocalStorage();
            });
        }

        updateTotalPrice();
        updateLocalStorage();
    }

    function updateProductQuantityInCart(product) {
        var productElement = Array.from(cartContent.children).find(function (element) {
            return element.querySelector('.productNew-info strong').textContent === product.name;
        });

        if (productElement) {
            var quantitySpan = productElement.querySelector('.quantity');
            quantitySpan.textContent = product.quantity;
        }
    }

    function updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(productsInCart));
    }

    function clearCart() {
        // Изчистване на съдържанието на количката
        const cartItems = document.getElementById('cartContent');
        cartItems.innerHTML = '';

        // Нулиране на общата цена
        const totalPrice = document.getElementById('totalPrice');
        totalPrice.textContent = 'Total: $0.00';

        // Изчистване на localStorage
        localStorage.removeItem('cart');

        // Нулиране на масива с продуктите
        productsInCart = [];
    }

    cartIcon.addEventListener('click', function () {
        cart.style.right = '0';
    });

    closeCart.addEventListener('click', function () {
        cart.style.right = '-300px';
    });

    // Проверка за запазена количка в localStorage
    var storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        // Проходим през всички продукти в количката и ги добавяме в интерфейса
        storedCart.forEach(function (product) {
            addToCart(product.name, product.price, product.image, product.quantity);
        });
    }

    const cancelBtn = document.getElementById('cancelBtn');
    cancelBtn.addEventListener('click', function () {
        // Изчистване на количката и localStorage
        clearCart();
    });

    // Продукт 1
    var cart1Image = document.getElementById('cart1');
    cart1Image.addEventListener('click', function () {
        var productName = 'Margherita';
        var productPrice = 14.00;
        var productImage = 'Image/pizza-product-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 2
    var cart2Image = document.getElementById('cart2');
    cart2Image.addEventListener('click', function () {
        var productName = 'Supreme';
        var productPrice = 16.00;
        var productImage = 'Image/pizza-product-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 3
    var cart3Image = document.getElementById('cart3');
    cart3Image.addEventListener('click', function () {
        var productName = 'Vegetariana';
        var productPrice = 13.00;
        var productImage = 'Image/pizza-product-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 4
    var cart4Image = document.getElementById('cart4');
    cart4Image.addEventListener('click', function () {
        var productName = 'Prosciutto';
        var productPrice = 18.00;
        var productImage = 'Image/pizza-product-4.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 5
    var cart5Image = document.getElementById('cart5');
    cart5Image.addEventListener('click', function () {
        var productName = 'Vegetariana';
        var productPrice = 15.00;
        var productImage = 'Image/pizza-product-5.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 6
    var cart6Image = document.getElementById('cart6');
    cart6Image.addEventListener('click', function () {
        var productName = 'Napoli';
        var productPrice = 19.00;
        var productImage = 'Image/pizza-product-6.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });
});