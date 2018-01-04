//Hamburger menu
let hamburger = (function() {

    let button = document.querySelector('#hamburger__menu-link');
    let menu = document.querySelector('#dark-menu');
    let body = document.querySelector('body');
    let itemsList = document.getElementById("nav__list_hamburger").children;
    itemsList = Array.prototype.slice.call(itemsList);

    let _toggleMenu = function(e) {
        button.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        body.classList.toggle('locked');
    };

    var closeMenu = function closeMenu() {
        button.classList.remove('is-active');
        menu.classList.remove('is-active');
        body.classList.remove('locked');
    };

    let addListeners = function() {
        button.addEventListener('click', _toggleMenu);

        for(i=0 ; i<itemsList.length ; i++){
                itemsList[i].addEventListener('click',closeMenu);
            }
    };

    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) closeMenu();
    });

    return {
        init: addListeners
    };
})({
    button: '#hamburger__menu-link',
    menu: '#dark-menu'
});

hamburger.init();