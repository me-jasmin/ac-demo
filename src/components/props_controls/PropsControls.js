import React from 'react';
import PropTypes from 'prop-types';
// context
import GlobalContext from '../../context/';
// styles
import './propsControls.styles.scss';

/*
    @props
    usedFor: string
*/

export default class PropsControls extends React.Component {
    // prop types
    static propTypes = {
        usedFor: PropTypes.string,
    };

    // default prop types
    static defaultProps = {
        usedFor: 'button',
    };

    // array of props and values for the button component used to generate the controls
    buttonPropsValues = {
        disabled: [true, false],
        size: ['small', 'normal', 'large'],
        icon: [true, false],
        round: [true, false],
        shadow: [false, 'inset', 'outset', 'both'],
        primary: [true, false],
        secondary: [true, false],
        colorVariant: [false, 20, 40, 60, 80, 120],
        noHover: [true, false],
        noAnimation: [true, false],
    };

    // array of props and values for the input component used to generate the controls
    inputPropsValues = {
        disabled: [true, false],
        size: ['small', 'normal', 'large'],
        round: [true, false],
        shadow: [false, 'inset', 'outset', 'both'],
        noAnimation: [true, false],
    };

    // render function used to build out the controls for the component demo
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
                    <label className="prop-radio-label clearfix" key={`${prop}-${usedFor}-${i}`}>
                        <input
                            type="radio"
                            value={value}
                            name={`${prop}-${usedFor}`}
                            className="prop-radio-input"
                            onChange={event =>
                                contextState.chanageProps(
                                    usedFor,
                                    event.target.name.split('-')[0],
                                    shouldConvertType(event)
                                )
                            }
                            checked={contextState[usedFor][prop] === value}
                        />
                        {`${value}`}
                    </label>
                );
            });

            return (
                <div
                    className="prop-group g-col-12 s--g-col-6 m--g-col-4 p-4"
                    key={`${usedFor}-${i}`}
                >
                    <h3 className="prop-group-title">{`${prop}: ${
                        contextState[usedFor][prop]
                    }`}</h3>
                    {propGroup}
                </div>
            );
        });
    };

    render() {
        return (
            <GlobalContext.Consumer>
                {contextState => (
                    <div className="props-container grid fw-700 g-cols gap-m body fs-4 mb-10 mt-8 clearfix">
                        {this.renderPropsOptions(contextState)}
                    </div>
                )}
            </GlobalContext.Consumer>
        );
    }
}
