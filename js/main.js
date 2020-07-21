window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //Scroll
    const scroll = () => {
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
    };
    scroll();

    //Slider
    const slider = () => {
        const ul = document.querySelector('.portfolio-dots'),
            slide = document.querySelectorAll('.portfolio-item');

        for (let i = 0; i < slide.length; i++) {
            let li = document.createElement('li');
            li.classList.add('dot');
            if (i === 0) {
                li.classList.add('dot-active');
            }
            ul.append(li);
        }

        const dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-img');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };
        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);
    };
    slider();

    // включить display flex у .nav при клике  и доработать с закрытием окна
    const menuButton = () => {
        const burger = document.getElementById('burger');
        const nav = document.querySelector('.nav');
        console.log(nav);

        burger.addEventListener('click', () => {
            nav.style.display = 'flex';
        });

        document.addEventListener('click', (e) => {
            let target = event.target;
            if (target.classList.contains('nav-item') ||
            target.classList.contains('menu-cross')) {
                nav.style.display = 'none';
            }
        });
    };
    menuButton();
});