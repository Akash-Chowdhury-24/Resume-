import { loadTime } from "./clock.js";
import {loadAboutMe} from "./aboutMe.js"
import { loadService } from "./service.js";
import { loadWork } from "./work.js";
import { loadContact } from "./contact.js";
loadTime();

document.addEventListener("DOMContentLoaded", function(){
    const menuItems = document.querySelectorAll('.menu-item-list p');
    let activeItem = null;

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (activeItem !== this) {
                if (activeItem) {
                  activeItem.classList.remove('active');
                }
                this.classList.add('active');
                activeItem = this;
                

                if (this.classList.contains('js-about')) {
                  loadAboutMe();
                }else if(this.classList.contains('js-service')) {
                  loadService();
                }else if(this.classList.contains('js-work')){
                  loadWork();
                }else if(this.classList.contains('js-contact')){
                  loadContact();
                }else{
                  document.querySelector('.js-content').innerHTML = '';
                }
            } else {
                this.classList.remove('active');
                activeItem = null;
                document.querySelector('.js-content').innerHTML = '';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded",function(){
  const light=document.querySelector('.js-light');
  const dark=document.querySelector('.js-dark');
  const body = document.body;

  function changeLight(){
    if(light.checked){
      document.querySelector('.js-background').classList.add('light-background');
      document.querySelector('.js-container').classList.add('light-container');
      document.querySelector('.js-main').classList.add('light-main');
      document.querySelector('.js-extra').classList.add('light-extra');
      body.classList.add('light-mode');
    }
    if(dark.checked){
      document.querySelector('.js-background').classList.remove('light-background');
      document.querySelector('.js-container').classList.remove('light-container');
      document.querySelector('.js-main').classList.remove('light-main');
      document.querySelector('.js-extra').classList.remove('light-extra');
      body.classList.remove('light-mode');
    }
  }

  light.addEventListener('change',changeLight);
  dark.addEventListener('change',changeLight);
});

let k = 0;
function animation() {
    const element = document.querySelector('.js-extra');
    if (k === 0) {
        element.classList.add('extra-r');
        element.classList.remove('extra-l');
        k = 1;
    } else {
        element.classList.add('extra-l');
        element.classList.remove('extra-r');
        k = 0;
    }
    setTimeout(animation, 60000);
}
animation();

function postAnimation(){
  const element = document.querySelector('.js-post');
  const array = ['Designer','Thinker','Coder','Developer'];
  let i=0;
  function animate(){
    element.classList.remove('typing');
    void element.offsetWidth;
    element.innerHTML = array[i];
    element.classList.add('typing');
    i = (i + 1) % array.length; 
  }
  animate();
  setInterval(animate,3000);
}
setTimeout(postAnimation,3000);

