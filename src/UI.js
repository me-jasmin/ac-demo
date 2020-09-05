import React, { useState } from 'react';
// import custom components
import { Input, Button } from './components';
import PropsControls from './components/props_controls';
// context
import GlobalContext from './context/GlobalContext';
// helpers
import { handleButtonLogging, handleInputLogging } from './shared';
// styles
import 'camp-css/scss/camp.scss';

const UI = () => {
    const [button, setButton] = useState({
        icon: false,
        round: false,
        shadow: false,
        primary: false,
        size: 'normal',
        text: 'Button',
        noHover: false,
        disabled: false,
        secondary: false,
        colorVariant: false,
        noAnimation: false,
    });

    const [input, setInput] = useState({
        round: false,
        shadow: false,
        size: 'normal',
        disabled: false,
        noAnimation: false,
        placeholder: 'placeholder',
    });

    const chanageProps = (name, prop, value) => {
        const methods = {
            button: () => setButton(prevState => ({ ...prevState, [prop]: value })),
            input: () => setInput(prevState => ({ ...prevState, [prop]: value })),
        };
        methods[name]();
    };

    return (
        <GlobalContext.Provider value={{ button, input, chanageProps }}>
            <div id="demo-container">
                <h1>AC UI demo</h1>
                <div className="demo-row clearfix">
                    <div className="component-wrapper">
                        <Input
                            size={input.size}
                            round={input.round}
                            shadow={input.shadow}
                            disabled={input.disabled}
                            onBlur={handleInputLogging}
                            onFocus={handleInputLogging}
                            onChange={handleInputLogging}
                            placeholder={input.placeholder}
                            noAnimation={input.noAnimation}
                            autoComplete="off"
                        />
                    </div>
                    <PropsControls id="input" usedFor="input" />
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
                            disabled={button.disabled}
                            onClick={handleButtonLogging}
                            secondary={button.secondary}
                            noAnimation={button.noAnimation}
                            colorVariant={button.colorVariant}
                        >
                            {button.text}
                        </Button>
                    </div>
                    <PropsControls id="button" usedFor="button" />
                </div>
            </div>
        </GlobalContext.Provider>
    );
};

export default UI;
