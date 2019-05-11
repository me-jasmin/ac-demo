import React from 'react';
// import custom components
import { Input, Button } from './components';
import PropsControls from './components/props-controls';
// context
import GlobalContext from './context/GlobalContext';
// helpers
import { consoleCss } from './shared/helpers';
// styles
import 'camp-css/scss/camp.scss';

export default class UI extends React.Component {
    state = {
        button: {
            icon: false,
            round: false,
            primary: false,
            size: 'normal',
            text: 'Button',
            noHover: false,
            secondary: false,
            shadow: 'outset',
            colorVariant: 100,
            noAnimation: false,
        },
        input: {
            size: 'normal',
            shadow: 'outset',
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

    chanageProps = (name, prop, value) => {
        this.setState(state => ({
            [name]: {
                ...state[name],
                [prop]: value,
            },
        }));
    };

    render() {
        const { button, input } = this.state;
        //console.log(this.state);

        return (
            <GlobalContext.Provider value={{ button, input, chanageProps: this.chanageProps }}>
                <h1>AC UI demo</h1>
                <div style={{ padding: '40px' }}>
                    <Input
                        size={input.size}
                        round={input.round}
                        shadow={input.shadow}
                        onBlur={this.handleInput}
                        onFocus={this.handleInput}
                        onChange={this.handleInput}
                        placeholder={input.placeholder}
                        noAnimation={input.noAnimation}
                    />
                    <PropsControls usedFor="input">INPUT</PropsControls>
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
                    <PropsControls usedFor="button">BUTTON</PropsControls>
                </div>
            </GlobalContext.Provider>
        );
    }
}
