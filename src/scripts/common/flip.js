// let flipCustom = (function() {
//     let flip = document.querySelector('.card');
//     let login = document.querySelector('.auth-btn');
//     let main = document.querySelector('.main-btn');

//     if (flip && login && main) {
//         console.log('in flipLoginForm');
//         login.addEventListener('click', () => {
//             flip.classList.add('card--active');
//             login.style.opacity = '0';
//             login.style.cursor = 'default';
//         });
//         main.addEventListener('click', () => {
//             flip.classList.remove('card--active');
//             login.style.opacity = '1';
//             login.style.cursor = 'pointer';
//         });
//     }
// })

// flipCustom.init();

$("#card").flip();