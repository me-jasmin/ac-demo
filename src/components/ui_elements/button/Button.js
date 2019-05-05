import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
// helpers
import { getPairKeyValue } from '../../../shared/helpers';
// styles
import './button.styles.scss';

/*
    @props
    round: bool
    primary: bool
    noHover: bool
    children: node
    secondary: bool
    noAnimation: bool
    colorVariant: number
    size: 'small' || 'large'
    shadow: 'inset' || 'outset' || 'both'
*/

export default class Button extends React.Component {
    static propTypes = {
        round: PropTypes.bool,
        primary: PropTypes.bool,
        onClick: PropTypes.func,
        noHover: PropTypes.bool,
        children: PropTypes.node,
        secondary: PropTypes.bool,
        noAnimation: PropTypes.bool,
        colorVariant: PropTypes.number,
        size: PropTypes.oneOf(['small', 'large']),
        shadow: PropTypes.oneOf(['inset', 'outset', 'both']),
    };

    static defaultProps = {
        size: null,
        shadow: null,
        round: false,
        primary: false,
        noHover: false,
        secondary: false,
        noAnimation: false,
        colorVariant: null,
        onClick: null,
        children: 'Please add button text',
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
        const { children, onClick } = this.props;

        return (
            <a href="/" className={this.cssClasses()} onClick={onClick}>
                {children}
            </a>
        );
    }
}
