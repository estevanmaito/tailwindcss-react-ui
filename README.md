# Tailwind CSS React UI

<p>
  <a href="https://codecov.io/gh/estevanmaito/tailwindcss-react-ui"><img src="https://codecov.io/gh/estevanmaito/tailwindcss-react-ui/branch/master/graph/badge.svg" alt="codecov" /></a>
  <a href="https://travis-ci.com/github/estevanmaito/tailwindcss-react-ui"><img src="https://img.shields.io/travis/estevanmaito/tailwindcss-react-ui" alt="Travis (.org)" /></a>
  <a href="https://www.npmjs.com/package/tailwindcss-react-ui"><img src="https://img.shields.io/npm/v/tailwindcss-react-ui" alt="npm" /></a>
  <a href="https://github.com/estevanmaito/tailwindcss-react-ui/blob/master/LICENSE"><img src="https://img.shields.io/github/license/estevanmaito/tailwindcss-react-ui" alt="MIT License" /></a>
</p>

If you know Tailwind CSS, you already know how to use, customize and extend every component.

## 💿 Install

```sh
npm install tailwindcss-react-ui
```

## Usage

```jsx
import React from 'React'
import { Button } from 'tailwindcss-react-ui'

export default () => (
  <Button>Default</Button>

  <Button
    bg="purple-600"
    text="sm purple-100"
    hover="bg-purple-700">
    Customized
  </Button>

  <Button
    bg="purple-600"
    text="sm purple-100"
    extend="cursor-not-allowed border-2 border-red-500">
    Customized
  </Button>
)
```

You can adjust components just changing it's default properties ([check for each component's API](#components)), use the prop `extend` (expects a `string` separated by spaces) to apply any valid Tailwind CSS class in your config to add styles do the base component, or use it together with `reset` (boolean) to clear all styles and extend yourself.

## 🎉 Just wanna play around?

Clone this repo, get into `examples` folder and `npm install`. It will create a `create-react-app` using these components.

## 🧩 Components

- [Buttons](#buttons)

### Buttons

| Prop       | Value               |
| ---------- | ------------------- |
| h          | '10'                |
| px         | '5'                 |
| text       | 'normal indigo-100' |
| bg         | 'indigo-700'        |
| hover      | 'bg-indigo-800'     |
| focus      | 'shadow-outline'    |
| transition | 'colors'            |
| duration   | '150'               |
| rounded    | 'lg'                |
