const getPairKeyValue = (val, key) => val && key;

const consoleCss = color => {
    return `font-size: 16px; background-color: ${color}; color: #fff; padding: 10px 30px`;
};

const getHTMLattrs = (customProps, props) => {
    const cleanHTMLattrs = { ...props };

    customProps.forEach(customProp => {
        if (cleanHTMLattrs.hasOwnProperty(customProp)) delete cleanHTMLattrs[customProp];
    });

    return cleanHTMLattrs;
};

export { getPairKeyValue, consoleCss, getHTMLattrs };
