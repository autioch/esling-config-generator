# eslint-config-generator

*Work in progress.*


## Installation
`npm i eslint-config-generator`

## Usage

```javascript

const Eslint config generator = require('eslint-config-generator');

import  Eslint config generator  from 'eslint-config-generator';

```

## Adding Preact
1. Install packages:
`npm i preact babel-plugin-transform-react-jsx`
`npm i -D eslint-plugin-react`
2. Modify `tools/webpack.config.js`. Add option to javascript loader:
```javascript
  plugins: [
    ['transform-react-jsx', {
      pragma: 'h'
    }]
]
```
