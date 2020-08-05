const scroll = () => {
    'use strict';
    const nav = document.querySelector('.nav'),
        buttonOrder = document.querySelector('.button-order'),
        buttonCalc = document.querySelector('.button-calc'),
        calc = document.getElementById('calc'),
        request = document.getElementById('request'),
        scrollToBlock = (block) => {
            block.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };
    if (nav) {
        nav.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;
            if (target.classList.contains('nav-item')) {
                const idName = target.getAttribute('href').slice(1);
                const idBlock = document.getElementById(idName);
                scrollToBlock(idBlock);
            }
        });
        buttonOrder.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToBlock(request);
        });
        buttonCalc.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToBlock(calc);
        });
    }
};

export default scroll;