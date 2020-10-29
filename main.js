 
 let menus = document.querySelector('.container');
 let buttons =document.querySelectorAll('.btn')
 

 const menu = [
    {

    photo:"./Photos/Cakes/cake5.jpg",           
    title: 'Chocolate Cake',          
    category:  'Cake',        
    price:  15},

    {

    photo:"./Photos/Cakes/cake2.jpg", 
    title: 'Fruit Cake ', 
    category:  'Cake'    ,     
    price:  10  
},
    {

    photo:"./Photos/Cakes/cake3.jpg", 
    title: 'Extra Fruit', 
    category:  'Cake',     
    price:  25 
},
    {

    photo:"./Photos/CupCakes/cup6.jpg", 
    title: 'Cupcake pack', 
    category:  'Cupcake',     
    price: 8
}
    ,  
    {

    photo:"./Photos/CupCakes/cup5.jpg", 
    title: 'Chocolate Cupcake' , 
    category:  'Cupcake' ,     
    price:   5
},  
    {
    photo:"./Photos/CupCakes/cup2.jpg", 
    title: 'Christmas Cupcakes', 
    category:  'Cupcake' ,     
    price:  12
},  
    {
    photo:"./Photos/doughnuts/dou4.jpg", 
    title: 'Doughnut Pan Cake', 
    category:  'Doughnut',     
    price:  17
},  
    {
    photo:"./Photos/doughnuts/dou2.jpg", 
    title: 'Chocolate Doughnuts', 
    category:  'Doughnut',     
    price:  10
},  
    {
    photo:"./Photos/doughnuts/dou3.jpg", 
    title: 'Candy Doughnuts ', 
    category:  'Doughnut',     
    price:   12
},  
    {
     photo:"./Photos/other/lastthree/last1.jpg",
     title: 'Cream Fruit Cake', 
     category:  'Sweet',     
     price:  25
    },   
    {
    photo:"./Photos/other/lastthree/last2.jpg", 
    title: 'Happy Maried Pie', 
    category:  'Sweet',     
    price:  14
},    
    {
    photo:"./Photos/other/cake5.jpg", 
    title: 'Chocolate Cupcakesprice', 
    category: 'Sweet',     
    price:  3
}  
     
 ]


window.addEventListener('DOMContentLoaded', function(){

displayMenuItems(menu)
})

const displayMenuItems=(menuItems)=>{
    let displaymenu = menuItems.map(item=>{
        return `<article class="section-center">
                <div class="img-text">
                <img class="img" src=${item.photo} alt="cake"></div>
                <div class="item-info">
                <header>
                <h4 class="food-type">${item.title}</h4>
                <h4 class="price">${item.price} $</h4>
                </header>
                </div>
                </article>`
    })
displaymenu=displaymenu.join('')
menus.innerHTML =displaymenu;

}
buttons.forEach(button=>{
    button.addEventListener('click' ,(e)=>{
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(menuItem=>{
            if(menuItem.category===category){
                return menuItem
            }
        })
        if(category==='all'){
            displayMenuItems(menu)
        }
        else(displayMenuItems(menuCategory))
    })
})