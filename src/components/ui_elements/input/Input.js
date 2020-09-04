import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
// helpers
import { getPairKeyValue, getHTMLattrs } from '../../../shared/helpers';
import { customProps } from '../../../shared/props';
// styles
import './input.styles.scss';

const Input = ({ size, round, shadow, noAnimation, onChange, onFocus, onBlur, ...rest }) => {
    const cssClasses = () => {
        return cx(
            size,
            'input',
            shadow && `shadow ${shadow}`,
            getPairKeyValue(round, 'round'),
            getPairKeyValue(noAnimation, 'noAnimation')
        );
    };

    return (
        <input
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange}
            className={cssClasses()}
            {...getHTMLattrs(customProps, rest)}
        />
    );
};

export default Input;

// prop types
Input.propTypes = {
    round: PropTypes.bool,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    noAnimation: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    shadow: PropTypes.oneOf([false, 'inset', 'outset', 'both']),
};

// default prop types
Input.defaultProps = {
    size: 'normal',
    shadow: false,
    onBlur: null,
    round: false,
    onFocus: null,
    onChange: null,
    noAnimation: false,
};
