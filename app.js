const products = [
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
    // changing image
    item.addEventListener("mouseenter", () => {
        chosenProduct = products[index];
        currentProductImg.src = chosenProduct.img;
    });
});