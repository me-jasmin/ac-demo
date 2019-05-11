import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
// helpers
import { getPairKeyValue } from '../../../shared/helpers';
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
    static propTypes = {
        round: PropTypes.bool,
        icon: PropTypes.bool,
        primary: PropTypes.bool,
        onClick: PropTypes.func,
        noHover: PropTypes.bool,
        children: PropTypes.node,
        secondary: PropTypes.bool,
        noAnimation: PropTypes.bool,
        colorVariant: PropTypes.number,
        size: PropTypes.oneOf(['small', 'normal', 'large']),
        shadow: PropTypes.oneOf(['inset', 'outset', 'both']),
    };

    static defaultProps = {
        size: 'normal',
        icon: false,
        round: false,
        onClick: null,
        primary: false,
        noHover: false,
        secondary: false,
        noAnimation: false,
        colorVariant: false,
        children: 'Please add button text',
        shadow: PropTypes.oneOf(['inset', 'outset', 'both']),
    };

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

    render() {
        const { children, onClick, icon } = this.props;

        return (
            <a href="/" className={this.cssClasses()} onClick={onClick}>
                {icon && <img src={iconMock} className="icon" alt="icon" />}
                {children}
            </a>
        );
    }
}
