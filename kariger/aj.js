burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
 


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})
function reply_click(clicked_object)
{
     alert(clicked_object.getAttribute('Registation'));
     alert(clicked_object.getAttribute('karigerregistation'));
})
onclick()