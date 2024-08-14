export function loadAboutMe(){
  const aboutHTML=`
  <p>My journey in web development started with a curiosity for how websites work and has evolved into a dedicated career. I thrive on solving complex problems, optimizing performance, and staying updated with the latest industry trends. Whether it’s building responsive layouts, implementing dynamic features, or ensuring accessibility, I take pride in every aspect of my work.</p>

  <p>Skills: JavaScript, HTML, CSS, WordPress</p>
  `;
  document.querySelector('.js-content').innerHTML=aboutHTML;
}
