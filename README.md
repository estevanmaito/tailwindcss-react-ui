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

## 🚀 Usage

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

## 🧩 Components

[See the documentation for all available components](https://estevanmaito.github.io/tailwindcss-react-ui/)

## 🎉 Just wanna play around?

This will get you running the project and a live interface.

```sh
git clone git@github.com:estevanmaito/tailwindcss-react-ui.git
cd tailwindcss-react-ui
npm install
npm run dev
```

Then in another terminal, watch tests as you develop

```sh
npm run test:watch
```

When ready to commit something, run the linter and test for coverage (you can skip this as it will run automatically when you commit, but if theres something wrong with your code, you'll probably need to run the commands after)

```sh
npm run test:coverage
npm run lint
```

If there are errors with your lint, you can try to fix them automatically using

```sh
npm run lint:fix
```

When ready, add it to git and instead of `git commit`, run

```sh
npm run cz
```

This will present you with some questions that will result in a standard commit that will later be used to build and publish this package.

Then you're ready to PR.
