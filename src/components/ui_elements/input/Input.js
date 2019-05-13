import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
// helpers
import { getPairKeyValue, getHTMLattrs } from '../../../shared/helpers';
// styles
import './input.styles.scss';

/*
    @props
    round: bool
    onBlur: func
    onFocus: func
    onChange: func
    noAnimation: bool
    size: string ('small' || 'normal' || 'large')
    shadow: bool || string (false || 'inset' || 'outset' || 'both')
*/

export default class Input extends React.Component {
    // prop types
    static propTypes = {
        round: PropTypes.bool,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        onChange: PropTypes.func,
        noAnimation: PropTypes.bool,
        size: PropTypes.oneOf(['small', 'normal', 'large']),
        shadow: PropTypes.oneOf([false, 'inset', 'outset', 'both']),
    };

    // default prop types
    static defaultProps = {
        size: 'normal',
        shadow: false,
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

    // filter out native HTML attributes from custom props
    // used with getHTMLattrs
    customProps = [
        'size',
        'round',
        'onBlur',
        'shadow',
        'onFocus',
        'onChange',
        'noAnimation',
    ];

    render() {
        const { onChange, onFocus, onBlur } = this.props;

        return (
            <input
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChange}
                {...getHTMLattrs(this.customProps, this.props)}
                className={this.cssClasses()}
            />
        );
    }
}
