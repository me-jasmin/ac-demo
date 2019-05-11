import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
// helpers
import { getPairKeyValue, getHTMLattrs } from '../../../shared/helpers';
// styles
import './button.styles.scss';
// mockup image used as an icon
import iconMock from '../../../shared/images/icon.svg';

/*
    @props
    round: bool
    icon: string
    primary: bool
    onClick: func
    noHover: bool
    children: node
    secondary: bool
    noAnimation: bool
    colorVariant: number
    size: 'small' || 'normal' || 'large'
    shadow: 'inset' || 'outset' || 'both'
*/

export default class Button extends React.Component {
    // prop types
    static propTypes = {
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

    // default prop types
    static defaultProps = {
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

    // build out css classes
    cssClasses = () => {
        const {
            size,
            round,
            shadow,
            noHover,
            primary,
            secondary,
            noAnimation,
            colorVariant,
        } = this.props;

        return cx(
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
    };

    // filter out native HTML attributes from custom props
    // used with getHTMLattrs
    customProps = [
        'icon',
        'size',
        'round',
        'shadow',
        'onClick',
        'primary',
        'noHover',
        'secondary',
        'noAnimation',
        'colorVariant',
    ];

    render() {
        const { children, onClick, icon } = this.props;

        return (
            <a
                href="/"
                onClick={onClick}
                {...getHTMLattrs(this.customProps, this.props)}
                className={this.cssClasses()}
            >
                {icon && <img src={iconMock} className="icon" alt="icon" />}
                {children}
            </a>
        );
    }
}
