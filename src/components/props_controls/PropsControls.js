import React from 'react';
import PropTypes from 'prop-types';

import GlobalContext from '../../context';
import { elementProps } from '../../shared';

import './propsControls.styles.scss';

const PropsControls = ({ usedFor, ...rest }) => {
    const renderPropsOptions = contextState => {
        const propsSource = elementProps[usedFor];

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
                <div className="prop-group g-col-12 s--g-col-6 m--g-col-4 p-4" key={`${usedFor}-${i}`}>
                    <h3 className="prop-group-title">{`${prop}: ${contextState[usedFor][prop]}`}</h3>
                    {propGroup}
                </div>
            );
        });
    };

    return (
        <GlobalContext.Consumer>
            {contextState => (
                <div {...rest} className="props-container grid fw-700 g-cols gap-m body fs-4 mb-10 mt-8 clearfix">
                    {renderPropsOptions(contextState)}
                </div>
            )}
        </GlobalContext.Consumer>
    );
};

export default PropsControls;

PropsControls.propTypes = {
    usedFor: PropTypes.string,
};

PropsControls.defaultProps = {
    usedFor: 'button',
};
