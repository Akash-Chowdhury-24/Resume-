const hr=document.querySelector('.js-hours');
const min=document.querySelector('.js-min');
const sec=document.querySelector('.js-sec');

export function loadTime(){
  setInterval(function(){
    let now=new Date();
    hr.innerHTML=now.getHours()<10?'0'+now.getHours():now.getHours();
    min.innerHTML=now.getMinutes()<10?'0'+now.getMinutes():now.getMinutes();
    sec.innerHTML=now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds();
  },1);
}
