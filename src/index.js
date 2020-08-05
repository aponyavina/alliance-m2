    'use strict';

    import '@babel/polyfill';
    import 'nodelist-foreach-polyfill';
    import elementClosest from 'element-closest';
    elementClosest(window);
    import 'formdata-polyfill';
    import 'es6-promise';
    import 'fetch-polyfill';

    import scroll from './modules/scroll';
    import slider from './modules/slider';
    import togglePopup from './modules/togglePopup';
    import calc from './modules/calc';
    import sendForm from './modules/sendForm';

    scroll();
    slider();
    togglePopup();
    calc();
    sendForm();