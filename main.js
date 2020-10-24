//  const imgText= document.getElementsByClassName('img-text')
//  const cake = document.querySelectorAll('Cake');
//  const cupcake = document.querySelectorAll('Cupcake');
//  const doughnut = documnet.querySelectorAll('Doughnuts');
//  const last = document.querySelectorAll('Last');

// let buttons = document.querySelectorAll('.btn');

 

 const photos = document.querySelectorAll('.img-text');
 photos.forEach(Element=>{
     Element.style.display='none';

 })

const push=()=>{
 const cake = document.querySelectorAll('.Cake');
 cake.forEach(element=>{
     element.style.display ='grid';
 })
}