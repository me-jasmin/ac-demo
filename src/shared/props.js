// filter out native HTML attributes from custom props
export const customProps = [
    'icon',
    'size',
    'round',
    'shadow',
    'onBlur',
    'onClick',
    'primary',
    'noHover',
    'onFocus',
    'onChange',
    'secondary',
    'noAnimation',
    'colorVariant',
];

export const elementProps = {
    // array of props and values for the button component used to generate the controls
    button: {
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
    },
    // array of props and values for the input component used to generate the controls
    input: {
        disabled: [true, false],
        size: ['small', 'normal', 'large'],
        round: [true, false],
        shadow: [false, 'inset', 'outset', 'both'],
        noAnimation: [true, false],
    },
};
