const navlinks=document.querySelector(".navlinks");
const closeMenu=document.querySelector(".closeMenu");
const openMenu=document.querySelector(".openMenu");

openMenu.addEventListener('click',()=>{
    navlinks.style.display='flex';
    navlinks.style.top='0';
});
closeMenu.addEventListener('click',()=>{
    navlinks.style.top='-100%';
});

