# Book App

### How to run

`npm install`
`npm start`
<br />
`yarn`
`yarn start`

### How to build

`npm run build`
<br />
`yarn build`

### How to tests

`npm test`
<br />
`yarn test`

# File structure

**This is source code tree:**

```
src
|-- common
   |-- assets
   |-- mocks
   |-- styles
   |-- utils
|-- components
   |-- Atoms
   |-- Molecules
   |-- Organisms
   |-- Templates
|-- config
|-- hooks
|-- models
|-- pages
|-- routes
|-- services
|-- Bootstrap.tsx
|-- index.tsx
...
```

**This is component structure:**

```
...
components
|-- Component
   |-- Component.tsx
   |-- Component.spec.ts
   |-- interfaces.ts [optional]
   |-- styles.ts
   |-- index.tsx
...
```

**This is page structure:**

```
...
pages
|-- Page
   |-- Page.tsx
   |-- Page.spec.ts
   |-- interfaces.ts [optional]
   |-- styles.ts
   |-- index.tsx
...
```

**These are the folders and their functions:**

`./common`

Here are all the project assets that will be used by the application such as global styles, images, fonts, mocks, stories, reusable functions, among others

`./components`

Components are presentational only elements, grouping UI items

`./configs`

Configs are our application's global settings files

`./containers`

Containers are responsible for handling dependency injection, decoupling the application from the library

`./hooks`

Hooks are functions that allow to “plug in” to React's state and lifecycle features from functional components

`./hooks`

Object data models

`./pages`

Pages are mapped in routes and have all the containers needed to implement a functionality

`./routes`

Routes contains the `react-router-dom` implementation to map the project's routes to the respective pages

`./services`

Contains all the files responsible for consuming external services, such as the axios configuration file for consuming RestFul APIs.

### More utils commands

Analyzer build bundle
`npm run analyze`
`yarn analyze`

Find and fix Javascrit and TypeScript problems according to pre-defined rules
`npm run lint`
`yarn lint`

Find and fix code formatted
`npm run prettier`
`yarn prettier`

### Main dependecies

- [mui](https://mui.com/pt/)
- [axios](https://www.npmjs.com/package/axios)
- [date-fns](https://date-fns.org/)
- [react](https://reactjs.org/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [styled-components](https://styled-components.com/)
- [react-spring](https://react-spring.io/)

### Main dev dependecies

- [testing-library](https://testing-library.com/)
- [eslint](https://eslint.org/)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [prettier](https://prettier.io/)
- [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)
- [typescript](https://www.typescriptlang.org/)
- [web-vitals](https://web.dev/vitals/)
