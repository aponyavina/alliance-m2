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
    scroll();

    //Slider
    const slider = () => {
        const ul = document.querySelector('.portfolio-dots'),
            slide = document.querySelectorAll('.portfolio-item');
        if (slide !== null) {

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
                if (elem[index]) {
                    elem[index].classList.remove(strClass);
                }
            };

            const nextSlide = (elem, index, strClass) => {
                if (elem[index]) {
                    elem[index].classList.add(strClass);
                }
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
            if (slider) {
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
            }


            startSlide(1500);
        }

    };
    slider();

    // menuButton
    const menuButton = () => {
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
        });
    };
    menuButton();

    //calc 
    const calc = () => {

        const calcBlock = document.querySelector('.calc-block');
        if (calcBlock) {
            const calcType = document.getElementById('calc-type'),
                calcKind = document.getElementById('calc-kind'),
                calcSquare = calcBlock.querySelector('.calc-square'),
                calcDay = calcBlock.querySelector('.calc-day'),
                totalValue = document.getElementById('total'),
                calcButton = calcBlock.querySelector('.calc-button');

            calcBlock.addEventListener('input', (e) => {
                let target = e.target;
                if (!target.matches('select') && target.matches('input')) {
                    target.value = target.value.replace(/[^\d]/g, '');
                }
            });

            const countSum = () => {
                let total = 0,
                    dayValue = 1;

                const typeValue = calcType.options[calcType.selectedIndex].value,
                    kindValue = calcKind.options[calcKind.selectedIndex].value,
                    squareValue = +calcSquare.value;

                if (calcDay.value && calcDay.value < 5) {
                    dayValue *= 2;
                } else if (calcDay.value && calcDay.value < 10) {
                    dayValue *= 1.5;
                }

                if (typeValue && kindValue && squareValue) {
                    total = typeValue * kindValue * squareValue * dayValue;
                }

                if (!typeValue) {
                    calcType.style.borderColor = 'red';
                } else {
                    calcType.style.borderColor = 'rgba(255, 255, 355, 0.5';
                }
                if (!kindValue) {
                    calcKind.style.borderColor = 'red';
                } else {
                    calcKind.style.borderColor = 'rgba(255, 255, 355, 0.5';
                }
                if (!squareValue) {
                    calcSquare.style.borderColor = 'red';
                } else {
                    calcSquare.style.borderColor = 'rgba(255, 255, 355, 0.5';
                }

                totalValue.textContent = total;
            };

            calcButton.addEventListener('click', () => {
                countSum();
            });
        }
    };
    calc();

    //sendForm
    const sendfForm = () => {
        const sendOk = document.getElementById('send-ok');
        const sendError = document.getElementById('send-error');

        const input = document.querySelectorAll('input');

        document.addEventListener('input', (event) => {
            let target = event.target;
            if (target.getAttribute('name') === 'user-phone') {
                target.value = target.value.replace(/[^\d+]/g, '');
                if (target.value[0] === '+') {
                    target.value = target.value.slice(0, 12);
                }
                if (target.value[0] !== '+') {
                    target.value = target.value.slice(0, 11);
                }
            }
            if (target.getAttribute('name') === 'user-name') {
                target.value = target.value.replace(/[^а-я ]/gi, '');
            }
            if (target.getAttribute('name') === 'user-email') {
                target.value = target.value.replace(/[а-я ]/gi, '');
            }
        });

        document.addEventListener('submit', (event) => {
            let target = event.target;
            event.preventDefault();
            const formData = new FormData(target);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    sendOk.style.display = 'flex';
                    setTimeout(() => {
                        sendOk.style.display = 'none';
                    }, 5000);
                })
                .catch((error) => {
                    sendError.style.display = 'flex';
                    setTimeout(() => {
                        sendError.style.display = 'none';
                    }, 5000);
                    console.error(error);
                });
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
        const postData = (formData) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            });
        };
    };
    sendfForm();
});