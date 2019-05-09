import React from 'react';
// import custom components
import { Input, Button } from './components';
// helpers
import { consoleCss } from './shared/helpers';
// styles
import 'camp-css/scss/camp.scss';
// mockup image used as an icon
import icon from './shared/images/icon.svg';

export default class UI extends React.Component {
    state = {
        button: {
            icon: icon,
            round: true,
            primary: true,
            size: 'normal',
            text: 'Button',
            noHover: false,
            secondary: false,
            shadow: 'outset',
            colorVariant: 100,
            noAnimation: false,
        },
        input: {
            size: null,
            shadow: null,
            round: false,
            noAnimation: false,
            placeholder: 'placeholder',
        },
    };

    // test function to handle button click
    handleButton = event => {
        // prevent default event
        event.preventDefault();
        // element
        const el = event.target;
        // logging :)
        console.log('%c Button clicked!  %s', consoleCss('#139879'), el);
    };

    // test function to handle input
    handleInput = event => {
        // prevent default event
        event.preventDefault();
        // element
        const el = event.target;
        // logging :)
        switch (event.type) {
            case 'focus':
                console.log('%c Input focus!  %s', consoleCss('#5884ea'), el);
                break;
            case 'blur':
                console.log('%c Input blur!  %s', consoleCss('#5884ea'), el);
                break;
            case 'change':
                console.log(`%c Input change! value: ${el.value}  %s`, consoleCss('#5884ea'), el);
                break;
            default:
                break;
        }
    };

    render() {
        const { button, input } = this.state;

        return (
            <>
                <h1>AC UI demo</h1>
                <div style={{ padding: '40px' }}>
                    <Input
                        size={button.size}
                        round={button.round}
                        shadow={button.shadow}
                        onBlur={this.handleInput}
                        onFocus={this.handleInput}
                        onChange={this.handleInput}
                        placeholder={input.placeholder}
                        noAnimation={button.noAnimation}
                    />
                </div>
                <div style={{ padding: '40px' }}>
                    <Button
                        size={button.size}
                        icon={button.icon}
                        round={button.round}
                        shadow={button.shadow}
                        primary={button.primary}
                        noHover={button.noHover}
                        onClick={this.handleButton}
                        secondary={button.secondary}
                        noAnimation={button.noAnimation}
                        colorVariant={button.colorVariant}
                    >
                        {button.text}
                    </Button>
                </div>
            </>
        );
    }
}
