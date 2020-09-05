import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { getPairKeyValue, getHTMLattrs, customProps } from '../../../shared';

import './input.styles.scss';

const Input = ({ size, round, shadow, noAnimation, onChange, onFocus, onBlur, ...rest }) => {
    const cssClasses = () =>
        cx(
            size,
            'input',
            shadow && `shadow ${shadow}`,
            getPairKeyValue(round, 'round'),
            getPairKeyValue(noAnimation, 'noAnimation')
        );

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

Input.propTypes = {
    round: PropTypes.bool,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    noAnimation: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    shadow: PropTypes.oneOf([false, 'inset', 'outset', 'both']),
};

Input.defaultProps = {
    size: 'normal',
    shadow: false,
    onBlur: null,
    round: false,
    onFocus: null,
    onChange: null,
    noAnimation: false,
};
