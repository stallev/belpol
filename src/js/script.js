"use strict";

const { event } = require("jquery");

function addedBgImageToSection(){
  let bg__elements = document.querySelectorAll('.bg');
  bg__elements.forEach(element => {
    let bg_img_src = element.getAttribute('data-bg-src');
    element.style.backgroundImage = 'url(' + bg_img_src + ')';
  });
}
addedBgImageToSection();

let orderForm = document.querySelector('.order-link--order-section');
let orderSubmitButton = document.querySelector('.order-form__input-submit');
orderForm.addEventListener("click", displayForm);
orderSubmitButton.addEventListener("click", hideForm);

function displayForm(evt){
  evt.preventDefault();
  orderForm.classList.remove('order-form--hidden');
  orderForm.classList.add('order-form--display');
}
function hideForm(){
  orderForm.classList.remove('order-form--display');
  orderForm.classList.add('order-form--hidden');  
}