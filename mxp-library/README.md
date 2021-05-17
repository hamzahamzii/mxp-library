# MXP-Library

Test library

## Installation

Use the package manager [npm](https://nodejs.org/en/download/) to install MXP-Library.

```bash
npm i mxp-library
OR
yarn add mxp-library
```

## Usage

```python
import { createApp } from 'vue'
import App from './App.vue'
import mxpLibrary from 'mxp-library';

const app = createApp(App);
app.use(mxpLibrary);
app.mount('#app')

```

## Render in .vue file

```html
<mxpButton color"purple" light>hi<mxpButton />
```
