### FSWD (Full Stack Web Development / Pro MERN Stack)

Github Repo:- [https://github.com/vasansr/pro-mern-stack-2](https://github.com/vasansr/pro-mern-stack-2)

## Package Installation

To initialize package.json run `npm init`.

- `npm install express`
- `npm uninstall express`

For installing development dependencies which are not required in production or running the application use `--save-dev`.

`npm install --save-dev package`

To check currently installed all packages:-

`npm ls --depth=0`

## Babel

To compile JSX into javaScript so that the browser understand, we need **Babel**. **Babel** looks for the attribute `type="text/babel"` in all scripts and then transforms and runs the script with the attribute.

`npm install --save-dev @babel/core @babel/cli`

`npm install --save-dev @babel/preset-react`

To transform jsx into regular javaScript:-

`npx babel src --presets @babel/react --out-dir public`

Here, **src** is the input directory and **public** is the output directory.

To transform newer ES features with older for browser supports:-

`npm install --save-dev @babel/preset-env`

Create a **.babelrc** file for babel configuration about what presets to use. In this project, it is **ui/src/.babelrc**.

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "chrome": "90",
          "firefox": "85",
          "safari": "13",
          "edge": "90"
        },
        "useBuiltIns": "entry",
        "corejs": 3
      }
    ],
    "@babel/preset-react"
  ]
}
```

In **package.json** under **scripts**:

`"compile": "babel src --out-dir public"`

To automatically detect changes in source and recompile.
`"watch": "babel src --out-dir public --watch --verbose"`

## Other

- `node server.js`

- `npm start`

These two commands do the same. **npm** looks for file **server.js** and run it using **Node.js**.

If we move **server.js** to other locations than the root of the project, then we should add the following to the **scripts** section of package.json. Let,say we have **server.js** in the **server/** directory.

```json
"scripts": {
  "start": "node server/server.js",
}
```

In **package.json**, **main** field indicate the file to load when the project is imported as a module in other projects. This field is not meant for indicating the starting point of the server.

If we want all static files to be accessed by a prefixed URL, for example **/public**:-

[htttps://expressjs.com/en/starter/static-files.html](htttps://expressjs.com/en/starter/static-files.html)

## Which Router to Use?

| Router Type        | Use Case                                                      |
| ------------------ | ------------------------------------------------------------- |
| **Browser Router** | For standard web apps (modern Browsers)                       |
| **Hash Router**    | When server configuration is unavailable (e.g., GitHub Pages) |
| **Memory Router**  | For testing and React Native apps                             |
| **Static Router**  | For server-side rendering(SSR) (e.g., Next.js, Express.js)    |
