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
            shadow: false,
            primary: false,
            size: 'normal',
            text: 'Button',
            noHover: false,
            secondary: false,
            colorVariant: false,
            noAnimation: false,
        },
        input: {
            round: false,
            shadow: false,
            size: 'normal',
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
        console.log('%c Button clicked! %s', consoleCss('#139879'), el);
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
                console.log('%c Input focus! %s', consoleCss('#ff8730'), el);
                break;
            case 'blur':
                console.log('%c Input blur! %s', consoleCss('#9159fc'), el);
                break;
            case 'change':
                console.log(`%c Input change! value: ${el.value} %s`, consoleCss('#f3376b'), el);
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

        return (
            <GlobalContext.Provider value={{ button, input, chanageProps: this.chanageProps }}>
                <div id="demo-container">
                    <h1>AC UI demo</h1>
                    <div className="demo-row clearfix">
                        <div className="component-wrapper">
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
                        </div>
                        <PropsControls usedFor="input" />
                    </div>
                    <div className="demo-row clearfix">
                        <div className="component-wrapper">
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
                        <PropsControls usedFor="button" />
                    </div>
                </div>
            </GlobalContext.Provider>
        );
    }
}
