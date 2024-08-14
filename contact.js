export function loadContact(){
  const HTML=`
  <a href="http://wa.me/9330291655" target="_blank">
    WhatsApp
  </a>
  <a href="mailto: akashchowdhurywork24@gmail.com" target="_blank">
    Mail
  </a>
  <a href="https://www.linkedin.com/in/akash-chowdhury-12141a222/" target="_blank">
    Linkdin
  </a>
  <a href="https://github.com/Akash-Chowdhury-24" target="_blank">
    GitHub
  </a>

  <a href="https://calendly.com/akashchowdhurywork24/free-cosulting-for-your-website" target="_blank">
    Book a Call
  </a>
  `;
  document.querySelector('.js-content').innerHTML=HTML;
}
