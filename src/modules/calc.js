const calc = () => {
    'use strict';
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

export default calc;