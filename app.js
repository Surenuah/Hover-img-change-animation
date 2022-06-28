const products = [
    {
        img: "./assets/payment-balance.png"
    },
    {
        img: "./assets/payment-qr.png"
    },
    {
        img: "./assets/payment-plateNumber.png"
    },
    {
        img: "./assets/payment-card.png"
    },
    {
        img: "./assets/payment-bluetooth.png"
    },
    {
        img: "./assets/payment-bankCard.png"
    },
    {
        img: "./assets/payment-sms.png"
    },
    {
        img: "./assets/payment-nfc.png"
    },
];

let chosenProduct = products[0];
const paymentMethodsItem =document.querySelectorAll(".payment-methods__item");
const currentProductImg = document.querySelector(".payment-methods__img");

paymentMethodsItem.forEach((item, index) => {
    item.addEventListener("mouseenter", (e) => {
        // changing image
        chosenProduct = products[index];
        currentProductImg.src = chosenProduct.img;

        const active = document.querySelectorAll(".payment-methods__item_active");
        active.forEach(element => {
            element.classList.remove("payment-methods__item_active");
        });

        // adding active class
        e.target.classList.add("payment-methods__item_active");
    });
});