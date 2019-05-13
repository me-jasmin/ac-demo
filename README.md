# AC-demo react components

# Install
```sh
$ npm install
or
$ yarn
```

## Run development
```sh
Dev:
$ npm run start
or
$ yarn start
```

## Run production
```sh
$ npm run build
or
$ yarn build
```

## Components
# Input
```sh
<Input placeholder="This placeholder text..." />
```
```sh
<Input size="large" shadow="both" placeholder="Your e-mail..." />
```
```sh
<Input shadow="both" disabled placeholder="Your e-mail..." />
```
| prop | description |
| ------ | ------ |
| round: bool | display round corners |
| size: string | size of the input field // values: 'small', 'normal', 'large'|
| shadow: bool or string | display shadow // values: false, 'inset', 'outset', 'both' |
| noAnimation: bool | use CSS3 animations |
| onBlur: func | function that gets triggered on the onBlur event |
| onFocus: func | function that gets triggered on the onFocus event |
| onChange: func | function that gets triggered on the onChange event  |
| onChange: func | function that gets triggered on the onChange event  |
| Native HTML Attributes | any input attribute can also be passed as a prop |

# Button
```sh
<Button>Button</Button>
```
```sh
<Button primary icon shadow="outset">Submit</Button>
```
```sh
<Button secondary icon disabled>Submit</Button>
```
| prop | description |
| ------ | ------ |
| round: bool | display round corners |
| size: string | size of the input field // values: 'small', 'normal', 'large'|
| shadow: bool or string | display shadow // values: false, 'inset', 'outset', 'both' |
| noAnimation: bool | use CSS3 animations |
| icon: bool | display an icon |
| primary: bool | use primary button styles |
| secondary: bool | use secondary button styles |
| colorVariant: bool or number | use a specific shade of color // values: (false, 20, 40, 60, 80, 120) |
| noHover: bool | disable hover |
| children: node | button text or node |
| onClick: func | function that gets triggered on the onClick event |
| Native HTML Attributes | any anchor attribute can also be passed as a prop |


## Logging
See developer console

## Files

    .
    ├── src                             # Source files
        ├── components                  # Components folder
            ├── ui_elements             # Folder for the main UI components
                ├── button              # Button component
                ├── input               # Input component
            ├── props_controls          # Demo controls component
    ├── shared                          # Shared files
        ├── images                      # Images used for this demo
        ├── helpers.js                  # Helper functions
    ├── index.js                        # index.js
    ├── UI.js                           # UI component that is used to show the other ones
    └── README.md                       # This readme
