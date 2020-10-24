const nav =document.getElementById('nav');
const logo =document.getElementById('logos')
const list =document.getElementById('navlist')

logo.addEventListener('click', function(){
     nav.style.overflow='visible'
     nav.style.height='200px'
 logo.classList.toggle('logo')

})