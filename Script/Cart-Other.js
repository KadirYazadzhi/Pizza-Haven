const cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', function () {
    // Изчистване на количката и localStorage
    clearCart();
});

function clearCart() {
    // Изчистване на съдържанието на количката
    const cartItems = document.getElementById('cartContent');
    cartItems.innerHTML = '';

    // Изчистване на localStorage само за 'cart' ключа
    localStorage.removeItem('cart');

    // Скриване на количката след изчистване
    const cart = document.getElementById('cart');
    cart.style.right = '-100%';

    // Нулиране на общата цена
    const totalPrice = document.getElementById('totalPrice');
    totalPrice.innerHTML = 'Total: 0.00 лв.';
}






document.addEventListener('DOMContentLoaded', function () {
    const closeNameModal = document.getElementById('closeNameModal');
    const closeCardModal = document.getElementById('closeCardModal');
    const nextButton = document.getElementById('next');


    closeNameModal.addEventListener('click', function () {
        document.getElementById('namemodal').style.display = 'none';
        document.getElementById("checkoutModal").style.display = "none";
    });


    closeCardModal.addEventListener('click', function () {
        document.getElementById('modalcard').style.display = 'none';
        document.getElementById("checkoutModal").style.display = "none";
    });

    nextButton.addEventListener('click', function () {
        if (validateNameForm()) {
            document.getElementById('namemodal').style.display = 'none';
            document.getElementById('modalcard').style.display = 'block';
        }

    });

    payNowButton.addEventListener('click', function () {
        if (validateCardForm()) {
            // Добавете следния код към вашия JavaScript
            const payNowButton = document.getElementById('payNowButton');
            const messageModal = document.getElementById('messageModal');
            const messageContent = document.getElementById('messageContent');
            const messageModalClose = document.getElementById('messageModalClose');

// При натискане на бутона "Pay Now"
            payNowButton.addEventListener('click', function () {
                // Вашият код за валидация и изпращане на заявка

                // Пример: извеждане на съобщение за успешно плащане
                showMessageModal('Payment successful!', 'success');
            });

// Функция за показване на модален прозорец със съобщение и икона
            function showMessageModal(message, type) {
                // Задаване на съдържание и стилове според типа на съобщението
                messageContent.innerHTML = message;

                // Добавяне на икона в зависимост от типа
                switch (type) {
                    case 'success':
                        messageContent.innerHTML += '<br><i class="icon-success">&#10004;</i>';
                        break;
                    // Добавете още case по ваше желание за други типове съобщения
                }

                // Показване на модалния прозорец
                messageModal.style.display = 'block';

                // Затваряне на модалния прозорец при клик върху close бутона
                messageModalClose.onclick = function () {
                    messageModal.style.display = 'none';
                };
            }

        }
    });
});


document.getElementById("closeAll").addEventListener("click", function() {
    document.getElementById("namemodal").style.display = "none";
    document.getElementById("modalcard").style.display = "none";
    document.getElementById("messageModal").style.display = "none";
    document.getElementById("checkoutModal").style.display = "none";
    const cartItems = document.getElementById('cartContent');
    cartItems.innerHTML = '';

    // Скриване на количката след изчистване
    const cart = document.getElementById('cart');
    cart.style.right = '-100%';

    const priceRemove = document.getElementById('totalPrice')
    priceRemove.innerHTML = 'Total: 0.00 лв.';

    clearCart();

    localStorage.removeItem('cart');
    localStorage.clear();
});










const nameFormInputs = document.querySelectorAll('#firstName, #lastName, #phoneNumber, #address');
const cardFormInputs = document.querySelectorAll('#cardNumber, #cardHolder, #expiryDate, #cvv');

nameFormInputs.forEach(input => {
    input.addEventListener('input', function () {
        validateField(input);
    });
});

cardFormInputs.forEach(input => {
    input.addEventListener('input', function () {
        validateField(input);
    });
});

function validateField(input) {
    const errorMessageId = input.id + 'Error';
    const errorMessageElement = document.getElementById(errorMessageId);

    if (input.value.trim() === '') {
        errorMessageElement.innerText = 'Please enter ' + input.placeholder.toLowerCase() + '.';
        input.classList.remove('valid');
        input.classList.add('error');
    } else {
        errorMessageElement.innerText = '';
        input.classList.remove('error');
        input.classList.add('valid');
    }
}

function validateNameForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phoneNumber = document.getElementById('phoneNumber');
    const address = document.getElementById('address');

    document.getElementById('firstNameError').innerText = firstName.value.trim() === '' ? 'Please enter your first name.' : '';
    firstName.classList.toggle('error', firstName.value.trim() === '');
    firstName.classList.toggle('valid', firstName.value.trim() !== '');

    document.getElementById('lastNameError').innerText = lastName.value.trim() === '' ? 'Please enter your last name.' : '';
    lastName.classList.toggle('error', lastName.value.trim() === '');
    lastName.classList.toggle('valid', lastName.value.trim() !== '');

    document.getElementById('phoneNumberError').innerText = phoneNumber.value.trim() === '' ? 'Please enter your phone number.' : '';
    phoneNumber.classList.toggle('error', phoneNumber.value.trim() === '');
    phoneNumber.classList.toggle('valid', phoneNumber.value.trim() !== '');

    document.getElementById('addressError').innerText = address.value.trim() === '' ? 'Please enter your address.' : '';
    address.classList.toggle('error', address.value.trim() === '');
    address.classList.toggle('valid', address.value.trim() !== '');

    return firstName.value.trim() !== '' && lastName.value.trim() !== '' && phoneNumber.value.trim() !== '' && address.value.trim() !== '';
}

function validateCardForm() {
    const cardNumber = document.getElementById('cardNumber');
    const cardHolder = document.getElementById('cardHolder');
    const expiryDate = document.getElementById('expiryDate');
    const cvv = document.getElementById('cvv');

    document.getElementById('cardNumberError').innerText = cardNumber.value.trim() === '' ? 'Please enter your card number.' : '';
    cardNumber.classList.toggle('error', cardNumber.value.trim() === '');
    cardNumber.classList.toggle('valid', cardNumber.value.trim() !== '');

    document.getElementById('cardHolderError').innerText = cardHolder.value.trim() === '' ? 'Please enter the card holder\'s name.' : '';
    cardHolder.classList.toggle('error', cardHolder.value.trim() === '');
    cardHolder.classList.toggle('valid', cardHolder.value.trim() !== '');

    document.getElementById('expiryDateError').innerText = expiryDate.value.trim() === '' ? 'Please enter the expiry date.' : '';
    expiryDate.classList.toggle('error', expiryDate.value.trim() === '');
    expiryDate.classList.toggle('valid', expiryDate.value.trim() !== '');

    document.getElementById('cvvError').innerText = cvv.value.trim() === '' ? 'Please enter the CVV.' : '';
    cvv.classList.toggle('error', cvv.value.trim() === '');
    cvv.classList.toggle('valid', cvv.value.trim() !== '');

    return cardNumber.value.trim() !== '' && cardHolder.value.trim() !== '' && expiryDate.value.trim() !== '' && cvv.value.trim() !== '';
}



function openModal() {
    var checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.style.display = 'block';
}

// Изчакайте, докато DOM е зареден, преди да изпълните скрипта
document.addEventListener("DOMContentLoaded", function () {
    // Извличане на референции към необходимите елементи
    var checkoutModal = document.getElementById('checkoutModal');
    var checkoutBtn = document.getElementById('checkoutBtn');
    var closeCheckout = document.querySelector('.modal-content .close');
    var checkoutForm = document.getElementById('checkoutForm');
    var totalPriceCheckout = document.getElementById('totalPriceCheckout');

    // Добавяне на слушател за събитието "click" върху бутона за показване на модалния прозорец
    checkoutBtn.addEventListener('click', function () {
        // Показване на модалния прозорец и актуализиране на общата цена
        checkoutModal.style.display = 'block';
        updateTotalPriceInModal();
    });



    // Добавяне на слушател за събитието "click" върху бутона за затваряне на модалния прозорец
    closeCheckout.addEventListener('click', function () {
        // Скриване на модалния прозорец при затваряне
        checkoutModal.style.display = 'none';
    });

    // Добавяне на слушател за събитието "click" върху прозореца, за да го затваря при клик извън него
    window.addEventListener('click', function (event) {
        if (event.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });

    // Добавяне на слушател за събитието "submit" на формата за пазаруване
    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Извличане на информацията от формата и записване в атрибути на формата
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
    });

    // Функция за актуализиране на общата цена в модалния прозорец
    function updateTotalPriceInModal() {
        var totalPriceInput = document.getElementById('totalPriceCheckout');
        totalPriceInput.innerHTML = 'Total: ' + total.toFixed(2) + ' лв.';
    }
});

