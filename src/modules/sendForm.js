const sendfForm = () => {
    'use strict';
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
        if (target.querySelector('input[name="user-name"]').value === '') {
            target.querySelector('input[name="user-name"]').style.background = '#ff000050';
            return false;
        } else {
            target.querySelector('input[name="user-name"]').style.background = 'rgba(255, 255, 255, 0.25)';
        }
        if (target.querySelector('input[name="user-phone"]').value === '') {
            target.querySelector('input[name="user-phone"]').style.background = '#ff000050';
            return false;
        } else {
            target.querySelector('input[name="user-phone"]').style.background = 'rgba(255, 255, 255, 0.25)';
        }

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
                event.target.reset();
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

export default sendfForm;