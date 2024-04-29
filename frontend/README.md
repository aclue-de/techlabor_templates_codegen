# Frontend
Provides UI for fetching, adding & deleting users.
Primarily uses react, material-ui & redux-toolkit (codegen).
Requires Backend to be running.
Generates & uses a http-client-api using rtk-codegen from the swagger.json provided by the backend.

## Setup

### Yarn

Install yarn globally on your computer f.e. using npm

```npm i --global yarn```

Dot not use npm commands inside this project. Npm Packages are fine.

### CodeGen

This repository uses rtk codegen to generate the client api & types from a backend swagger endpoint.

run ```yarn codegen``` to generate files in codegen/api/raw

More documentation in <https://github.com/aclue-de/techlabor_templates_codegen>

### Start

run ```yarn start``` and wait for a browser window to open

## Directory

### src

The react client application

#### component

Custom react components that use React & Mui that may be reused

#### entity

Data objects, Models, etc.

#### page

Contains all pages to be rendered and each Page has a specific route.

#### state

All Global States

- ##### api
    - emptyApi: This is boilerplate and generated endpoints will be injected into this.
    - enhancedApi: Extending rawApi to allow f.e. tag invalidation for automatic refetch.
    - openapi-config.ts: Config to generate rawApi.ts.
    - rawApi.ts: Generated using script command.
- ##### store
    - Register apis and slices here

#### theme

Custom configuration for the Material Ui Theme.
<https://mui.com/material-ui/customization/theming/>

#### Index.html

Loading hierarchy: Index.html -> Index.tsx -> App.tsx + Routing -> AnyPage.tsx

#### package.json

Dependencies & scripts to run, test, deploy, etc.

#### tsconfig.json

Configures how Typescript is applied onto Javascript
<https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>

#### vite.config.js

Vite speeds up re-rendering significantly

#### yarn.lock

Replaces package-lock.json. Yarn is better at handling peer dependencies & resolving issues.

### npm packages

#### dependencies

- @emotion: Styling Library used by Mui
- @emotion/styled: Styling Components used by Mui
- @mui/material: Provides pre-styled components & builds on
  Css. <https://mui.com/material-ui/getting-started/installation/>
- @reduxjs/toolkit: ReduxToolKit (RTK) for Global State
  Management: <https://redux-toolkit.js.org/usage/usage-with-typescript>
- react: Wraps html elements using components & provides state management. <https://react.dev/learn>
- react-dom: Integrates react into the browser dom.
- react-redux: Global state management.
- react-router-dom: Routing to pages.

#### devDependencies

- @rtk-query/codegen-openapi: Generate Rtk Client from
  Swagger.json: <https://redux-toolkit.js.org/rtk-query/usage/code-generation>
- @types: Just types
- @typescript: Compiling of Typescript -> Javascript
- @vitejs/plugin-react: Integrate Vite into react renderer
- ts-node: Required for typescript compilation
- vite: Faster re-rendering <https://vitejs.dev/guide/>
