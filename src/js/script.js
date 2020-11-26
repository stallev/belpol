"use strict";
console.log('display');
//const { event } = require("jquery");

/*function addedBgImageToSection(){
  let bg__elements = document.querySelectorAll('.bg');
  bg__elements.forEach(element => {
    let bg_img_src = element.getAttribute('data-bg-src');
    element.style.backgroundImage = 'url(' + bg_img_src + ')';
  });
}
addedBgImageToSection();*/

let orderForm = document.querySelector('.order-form');
console.log(orderForm);
let orderBtn = document.querySelector('.order-link--order-section');
let orderSubmitButton = document.querySelector('.order-form__input-submit');
let messageOK = document.querySelector('.order__message-OK');
let messageOK_closeBtn = document.querySelector('.order__message-OK-btn');
orderBtn.addEventListener("click", displayForm);
orderSubmitButton.addEventListener("click", hideForm);
messageOK_closeBtn.addEventListener("click", hideMessage);

function displayForm(evt){
  //evt.preventDefault();
  console.log('hello');
  console.log(orderForm.className);
  orderForm.classList.remove('order-form--hidden');
  console.log(orderForm.className);
  orderForm.classList.add('order-form--display');
}
function hideForm(evt){
  evt.preventDefault();
  orderForm.classList.remove('order-form--display');
  orderForm.classList.add('order-form--hidden');
  messageOK.style.display = 'block'; 
}
function hideMessage(evt){
  evt.preventDefault();
  messageOK.style.display = 'none'; 
}