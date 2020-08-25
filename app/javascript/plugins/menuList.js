function menuList (){
    const menuBurger = document.querySelector(".menu-btn");
    const listMenu = document.querySelector(".list-menu");

menuBurger.addEventListener('click',function (){
    listMenu.classList.toggle("no-display");
});
};

menuList ();


export { menuList };
