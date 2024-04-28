document.addEventListener("DOMContentLoaded", function () {
    let favouriteItem;

    function createProductCard(productData, productId) {
        const {
            imageSrc,
            name,
        } = productData;
        const favouriteItemsContainer = document.getElementById("favourite-items");

        favouriteItem = document.createElement("div");
        favouriteItem.classList.add("favourite-items");

        const img = document.createElement("img");
        img.classList.add("favourite-items-image");
        img.src = imageSrc;
        img.alt = name;

        const strong = document.createElement("strong");
        strong.textContent = name;

        const removeButton = document.createElement("span");
        removeButton.classList.add("removeProductNew");
        removeButton.textContent = "✖";

        removeButton.addEventListener("click", function () {
            // При клик на бутона за премахване, извикваме функция за премахване на продукта от local storage
            removeFromLocalStorage(productId);
            // Премахваме текущия елемент от DOM
            this.closest('.favourite-items').remove();
        });

        favouriteItem.appendChild(img);
        favouriteItem.appendChild(strong);
        favouriteItem.appendChild(removeButton);

        favouriteItemsContainer.appendChild(favouriteItem);

        addToLocalStorage(productId, name, imageSrc);
    }

    function addToLocalStorage(productId, name, imageSrc) {
        let favouriteProducts = JSON.parse(localStorage.getItem('favouriteItem')) || {};

        if (!favouriteProducts.hasOwnProperty(productId)) {
            favouriteProducts[productId] = { name, imageSrc };
            localStorage.setItem('favouriteItem', JSON.stringify(favouriteProducts));

            const text = document.getElementById('favourite-text');
            text.style.display = 'none';
        } else {
            console.log("Продуктът вече е добавен.");
        }
    }

    function removeFromLocalStorage(productId) {
        let favouriteProducts = JSON.parse(localStorage.getItem('favouriteItem')) || {};

        delete favouriteProducts[productId];
        localStorage.setItem('favouriteItem', JSON.stringify(favouriteProducts));

        const heart = document.getElementById(`favourite${productId}`);
        heart.style.color = '';

        if (favouriteProducts[productId] === '') {
            const text = document.getElementById('favourite-text');
            text.style.display = 'block';
        }
    }


    function loadProductsFromLocalStorage() {
        let favouriteProducts = JSON.parse(localStorage.getItem('favouriteItem')) || {};

        for (const productId in favouriteProducts) {
            const { name, imageSrc } = favouriteProducts[productId];
            createProductCard({ name, imageSrc }, productId);

            const text = document.getElementById('favourite-text');
            text.style.display = 'none';
        }

        for (const productId in favouriteProducts) {
            const heart = document.getElementById(`favourite${productId}`);
            heart.style.color = '#fd0000';
        }
    }

    loadProductsFromLocalStorage();

    function itemColorChange(productId) {
        const heart = document.getElementById(`favourite${productId}`);
        heart.style.color = '#fd0000';
    }



    var favourite1 = document.getElementById('favourite1');
    favourite1.addEventListener("click", function () {
        const productId = '1';
        const productData = {
            imageSrc: "Image/pizza-product-1.png",
            name: "Margherita",
        };
        createProductCard(productData, productId);
        openFavourite();
        itemColorChange(productId);
    });

    var favourite2 = document.getElementById('favourite2');
    favourite2.addEventListener("click", function () {
        const productId = '2';
        const productData = {
            imageSrc: "Image/pizza-product-2.png",
            name: "Supreme",
        };
        createProductCard(productData, productId);
        openFavourite();
        itemColorChange(productId);
    });

    var favourite3 = document.getElementById('favourite3');
    favourite3.addEventListener("click", function () {
        const productId = '3';
        const productData = {
            imageSrc: "Image/pizza-product-3.png",
            name: "Vegetariana",
        };
        createProductCard(productData, productId);
        openFavourite();
        itemColorChange(productId);
    });

    var favourite4 = document.getElementById('favourite4');
    favourite4.addEventListener("click", function () {
        const productId = '4';
        const productData = {
            imageSrc: "Image/pizza-product-4.png",
            name: "Prosciutto",
        };
        createProductCard(productData, productId);
        openFavourite();
        itemColorChange(productId);
    });

    var favourite5 = document.getElementById('favourite5');
    favourite5.addEventListener("click", function () {
        const productId = '5';
        const productData = {
            imageSrc: "Image/pizza-product-5.png",
            name: "Vegetariana",
        };
        createProductCard(productData, productId);
        openFavourite();
        itemColorChange(productId);
    });

    var favourite6 = document.getElementById('favourite6');
    favourite6.addEventListener("click", function () {
        const productId = '6';
        const productData = {
            imageSrc: "Image/pizza-product-6.png",
            name: "Napoli",
        };
        createProductCard(productData, productId);
        openFavourite();
        itemColorChange(productId);
    });


});









function toggleFavouriteItems() {
    const favouriteItems = document.getElementById('favourite-items');
    const downFavourite = document.getElementById('downFavourite');
    const heart = document.getElementById('iconHeart');

    favouriteItems.style.display = (favouriteItems.style.display === 'block') ? 'none' : 'block';
    downFavourite.classList.toggle('rotate');

    if (favouriteItems.style.display === 'block') {
        heart.style.color = '#fd0000';
    }
    else {
        heart.style.color = '';
    }
}


function openFavourite() {
    const favouriteItems = document.getElementById('favourite-items');
    const downFavourite = document.getElementById('downFavourite');
    const heart = document.getElementById('iconHeart');

    favouriteItems.style.display =  'block';
    downFavourite.classList.toggle('rotate');

    if (favouriteItems.style.display === 'block') {
        heart.style.color = '#fd0000';
    }
    else {
        heart.style.color = '';
    }
}

function removeProduct() {
    // Добавете функционалност за премахване на продукта
    alert('Product removed!');
}