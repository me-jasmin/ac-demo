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
| prop | description |
| ------ | ------ |
| round: bool | display round corners |
| size: string 'small' || 'normal' || 'large' | size of the input field |
| shadow: string 'inset' || 'outset' || 'both' | display shadow |
| noAnimation: bool | use CSS3 animations |
| onBlur: func | function that gets triggered on the onBlur event |
| onFocus: func | function that gets triggered on the onFocus event |
| onChange: func | function that gets triggered on the onChange event  |

# Button
```sh
<Button>Button</Button>
```
| prop | description |
| ------ | ------ |
| round: bool | display round corners |
| size: string 'small' || 'normal' || 'large' | [plugins/googleanalytics/README.md][PlGa] |
| shadow: string 'inset' || 'outset' || 'both' | [plugins/medium/README.md][PlMe] |
| noAnimation: bool | [plugins/medium/README.md][PlMe] |
| icon: bool | display an icon |
| primary: bool | use primary button styles |
| secondary: bool | use secondary button styles |
| colorVariant: number | use a specific shade of color |
| noHover: bool | disable hover |
| children: node | button text or node |
| onClick: func | function that gets triggered on the onClick event |


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
