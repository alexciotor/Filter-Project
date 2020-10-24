const buttons = document.querySelectorAll('.btn');
const number = document.getElementById('num');
    let i = 0;
buttons.forEach(button=>{

    button.addEventListener('click',function(){
number.innerHTML=i
 
if(button.classList.contains('Increase')){
    i++
 
}

  if(button.classList.contains('Decrease')){
      i--
  }
 
    })    
if (button.classList.contains('Reset')){
number.innerHTML = '0';
}
})
