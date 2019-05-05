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
    // test function to handle button click
    testButtonClick = event => {
        // prevent default event
        event.preventDefault();
        // logging :)
        console.log('%c Button clicked!  %s', consoleCss, event.target);
    };

    render() {
        return (
            <>
                <h1>AC UI demo</h1>
                <Button
                    shadow="outset"
                    size="small"
                    round
                    colorVariant={100}
                    onClick={this.testButtonClick}
                    icon={icon}
                >
                    Basic button
                </Button>
                <Input placeholder="placeholder" shadow="outset" size="small" round />
                <Button
                    secondary
                    colorVariant={80}
                    shadow="outset"
                    round
                    onClick={this.testButtonClick}
                    icon={icon}
                >
                    Basic button
                </Button>
                <Input placeholder="placeholder" shadow="outset" round />
                <Button
                    primary
                    colorVariant={80}
                    shadow="outset"
                    size="large"
                    round
                    onClick={this.testButtonClick}
                >
                    Basic button
                </Button>
                <Input placeholder="placeholder" shadow="outset" size="large" round />
            </>
        );
    }
}
