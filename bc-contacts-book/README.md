<h1 align="center">
  React/Redux, Saga
</h1>


## 🍔 Install project

1.  **Start runing project.**

    Navigate into your new site’s directory and start it up. The project will be running on port `3000`

    ```sh
    cd <React-Redux-Saga-Search-DnD>
    npm i
    npm start
    ```
    The project will open on [http://localhost:3000/](http://localhost:3000/)
   

## 🙈 Crucial files?

A quick look at the top-level files and directories you'll see in the project.

    .
    ├── actions
    │   └── users-list
    │       └── index.js
    ├── assets
    │   ├── fonts
    │   │   └── open-sans
    │   │       ├── OpenSans-Bold-webfont.woff
    │   │       ├── OpenSans-BoldItalic-webfont.woff
    │   │       ├── OpenSans-ExtraBold-webfont.woff
    │   │       ├── OpenSans-ExtraBoldItalic-webfont.woff
    │   │       ├── OpenSans-Italic-webfont.woff
    │   │       ├── OpenSans-Light-webfont.woff
    │   │       ├── OpenSans-LightItalic-webfont.woff
    │   │       ├── OpenSans-Regular-webfont.woff
    │   │       ├── OpenSans-Semibold-webfont.woff
    │   │       └── OpenSans-SemiboldItalic-webfont.woff
    │   └── styles
    │       ├── _bootstrap.scss
    │       ├── _colors.scss
    │       ├── _common.scss
    │       ├── _fonts.scss
    │       └── master.scss
    ├── components
    │   ├── app
    │   │   ├── index.js
    │   │   └── styles.scss
    │   └── users-list
    │       ├── index.js
    │       ├── search.js
    │       ├── sortables.js
    │       ├── styles.scss
    │       └── user-popup.js
    ├── const
    │   └── actions.js
    ├── containers
    │   └── users-list
    │       └── index.js
    ├── index.js
    ├── reducers
    │   ├── index.js
    │   └── users-list
    │       └── index.js
    ├── sagas
    │   └── users-list
    │       └── index.js
    ├── serviceWorker.js
    ├── services
    │   ├── api.js
    │   ├── csv2json.js
    │   └── toCamelCase.js
    └── store
        └── index.js
