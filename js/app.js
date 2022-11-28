const mainContent = document.querySelector('#container');
const navbar = document.querySelector('.navbar');

const loadData = e => {
    e.preventDefault();
    if(e.target.classList.contains('')|| e.target.classList.contains('')){

    } 
}

window.addEventListener('DOMContentLoaded', () => {
    fetch('../pages/home.html')
       .then(page =>{
           return page.text();
       })
       .then(contentHTML =>{
             const div = document.createElement('div');
             div.innerHTML=contentHTML;
             mainContent.appendChild(div);
       })

       navbar.addEventListener('click', loadData);

})