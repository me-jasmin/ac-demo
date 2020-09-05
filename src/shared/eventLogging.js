import { consoleCss } from './helpers';

// test function to handle button click
export const handleButtonLogging = event => {
    // prevent default event
    event.preventDefault();
    // element
    const { target: element } = event;
    // logging :)
    console.log('%c Button clicked! %s', consoleCss('#139879'), element);
};

// test function to handle input
export const handleInputLogging = event => {
    // prevent default event
    event.preventDefault();
    // element
    const { target: element } = event;
    // logging :)
    switch (event.type) {
        case 'focus':
            console.log('%c Input focus! %s', consoleCss('#ff8730'), element);
            break;
        case 'blur':
            console.log('%c Input blur! %s', consoleCss('#9159fc'), element);
            break;
        case 'change':
            console.log(`%c Input change! value: ${element.value} %s`, consoleCss('#f3376b'), element);
            break;
        default:
            break;
    }
};
