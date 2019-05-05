import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
// helpers
import { getPairKeyValue } from '../../../shared/helpers';
// styles
import './input.styles.scss';

/*
    @props
    round: bool
    onBlur: func
    onFocus: func
    onChange: func
    noAnimation: bool
    size: 'small' || 'large'
    shadow: 'inset' || 'outset' || 'both'
*/

export default class Input extends React.Component {
    static propTypes = {
        round: PropTypes.bool,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        onChange: PropTypes.func,
        noAnimation: PropTypes.bool,
        size: PropTypes.oneOf(['small', 'large']),
        shadow: PropTypes.oneOf(['inset', 'outset', 'both']),
    };

    static defaultProps = {
        size: null,
        shadow: null,
        onBlur: null,
        round: false,
        onFocus: null,
        onChange: null,
        noAnimation: false,
    };

    cssClasses = () => {
        const { size, round, shadow, noAnimation } = this.props;

        return cx(
            size,
            'input',
            shadow && `shadow ${shadow}`,
            getPairKeyValue(round, 'round'),
            getPairKeyValue(noAnimation, 'noAnimation')
        );
    };

    getHTMLattrs = () => {
        const cleanHTMLattrs = { ...this.props };
        const customProps = [
            'size',
            'round',
            'onBlur',
            'shadow',
            'onFocus',
            'onChange',
            'noAnimation',
        ];

        customProps.forEach(customProp => {
            if (cleanHTMLattrs.hasOwnProperty(customProp)) delete cleanHTMLattrs[customProp];
        });

        return cleanHTMLattrs;
    };

    render() {
        const { onChange, onFocus, onBlur } = this.props;

        return (
            <input
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChange}
                {...this.getHTMLattrs()}
                className={this.cssClasses()}
            />
        );
    }
}
