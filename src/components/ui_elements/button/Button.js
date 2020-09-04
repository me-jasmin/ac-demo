import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
// helpers
import { getPairKeyValue, getHTMLattrs } from '../../../shared/helpers';
import { customProps } from '../../../shared/props';
// styles
import './button.styles.scss';
// mockup image used as an icon
import iconMock from '../../../shared/images/icon.svg';

const Button = ({
    children,
    onClick,
    icon,
    size,
    round,
    shadow,
    noHover,
    primary,
    secondary,
    noAnimation,
    colorVariant,
    ...rest
}) => {
    // build out css classes
    const cssClasses = () =>
        cx(
            size,
            'button',
            shadow && `shadow ${shadow}`,
            getPairKeyValue(round, 'round'),
            getPairKeyValue(noHover, 'noHover'),
            getPairKeyValue(primary, 'primary'),
            getPairKeyValue(secondary, 'secondary'),
            getPairKeyValue(noAnimation, 'noAnimation'),
            getPairKeyValue(colorVariant, `v-${colorVariant}`)
        );

    return (
        <button onClick={onClick} className={cssClasses()} {...getHTMLattrs(customProps, rest)}>
            {icon && <img src={iconMock} className="icon" alt="icon" />}
            {children}
        </button>
    );
};

export default Button;

Button.propTypes = {
    round: PropTypes.bool,
    icon: PropTypes.bool,
    primary: PropTypes.bool,
    onClick: PropTypes.func,
    noHover: PropTypes.bool,
    children: PropTypes.node,
    secondary: PropTypes.bool,
    noAnimation: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    shadow: PropTypes.oneOf([false, 'inset', 'outset', 'both']),
    colorVariant: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

Button.defaultProps = {
    size: 'normal',
    icon: false,
    round: false,
    onClick: null,
    shadow: false,
    primary: false,
    noHover: false,
    secondary: false,
    noAnimation: false,
    colorVariant: false,
    children: 'Please add button text',
};
