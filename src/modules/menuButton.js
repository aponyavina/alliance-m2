const menuButton = () => {
    'use strict';
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav');
    const complectButton = document.querySelectorAll('.complect_button');
    if (burger) {
        burger.addEventListener('click', () => {
            nav.style.display = 'flex';
        });
    }
    if (complectButton) {
        complectButton.forEach((element, i) => {
            element.addEventListener('click', () => {
                document.getElementById(`popup-complect${i+1}`).style.display = 'flex';
            });
        });
    }

    document.addEventListener('click', (e) => {
        let target = e.target;
        if (window.innerWidth < 1402) {
            if (target.classList.contains('nav-item') ||
                target.classList.contains('menu-cross')) {
                nav.style.display = 'none';
            }
        }
        if (target.classList.contains('form-close-icon')) {
            if (target.closest('.popup-form')) {
                target.closest('.popup-form').style.display = 'none';
            } 
            if (target.closest('.popup-complect')) {
                target.closest('.popup-complect').style.display = 'none';
            } 
        } 
        // if (target.closest('.popup-complect').style.display === 'flex') {
        //     target = target.closest('popup-block');
        //     if (!target) {
                
        //         target.closest('.popup-complect').style.display = 'none';
        //     }
        // }

    });
};

export default menuButton;