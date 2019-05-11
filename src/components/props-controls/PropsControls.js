import React from 'react';
// context
import GlobalContext from '../../context/GlobalContext';
// styles
import './propsControls.styles.scss';

export default class PropsControls extends React.Component {
    buttonPropsValues = {
        icon: [true, false],
        round: [true, false],
        shadow: ['inset', 'outset', 'both'],
        primary: [true, false],
        noHover: [true, false],
        secondary: [true, false],
        noAnimation: [true, false],
        size: ['small', 'normal', 'large'],
        colorVariant: [20, 40, 60, 80, 120],
    };

    inputPropsValues = {
        round: [true, false],
        shadow: ['inset', 'outset', 'both'],
        noAnimation: [true, false],
        size: ['small', 'normal', 'large'],
    };

    renderPropsOptions = contextState => {
        const { usedFor } = this.props;
        const propsSource = this[`${usedFor}PropsValues`];

        return Object.keys(propsSource).map((prop, i) => {
            const propGroup = propsSource[prop].map((value, i) => {
                const shouldConvertType = event => {
                    switch (typeof value) {
                        case 'boolean':
                            return JSON.parse(event.target.value);
                        case 'number':
                            return parseInt(event.target.value);
                        default:
                            return event.target.value;
                    }
                };

                return (
                    <label key={`${prop}-${usedFor}-${i}`}>
                        <input
                            type="radio"
                            name={prop}
                            value={value}
                            onChange={event =>
                                contextState.chanageProps(
                                    usedFor,
                                    event.target.name,
                                    shouldConvertType(event)
                                )
                            }
                        />
                        {`${value}`}
                    </label>
                );
            });

            return (
                <div key={`${usedFor}-${i}`}>
                    <h3>{`${prop} ${contextState[usedFor][prop]}`}</h3>
                    {propGroup}
                </div>
            );
        });
    };

    render() {
        return (
            <GlobalContext.Consumer>
                {contextState => (
                    <React.Fragment>
                        {this.renderPropsOptions(contextState)}
                    </React.Fragment>
                )}
            </GlobalContext.Consumer>
        );
    }
}
