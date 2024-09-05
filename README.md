I. Create template build with: tailwindcss - webpack on building template
- setup yarn init with webpack
  + `yarn init`
  + `yarn add webpack`
  + `yarn add webpack-cli`
  + `yarn add webpack-dev-server`
- create `public`, `src` folder (`public` for generated code from `webpack` build)
- add tailwind css:
  + `yarn add tailwindcss postcss autoprefixer`
  + `yarn add style-loader css-loader postcss-loader postcss-preset-env`
  + `yarn init`
- create `webpack.config.js`:
  + entry point to `entry: './src/js/index.js',`
  + `modules.include` point to `src/styles`
- create `src/styles/style.css`
- create `tailwind.config.js`: fix `content: ["./src/*.{html,js}"]`
- create `postcss.config.js`
- create `src/js/index.js`: point to css style file: `import '../styles/style.css';`
- add script build into `package.json`:
  `"scripts": {
    "dev": "webpack serve",
    "build": "webpack"
  },`


Ref: 
`https://gist.github.com/bradtraversy/1c93938c1fe4f10d1e5b0532ae22e16a`
`https://dev.to/j45t7/webpack-tailwind-css-setup-35bm`
`https://tailwindcss.com/docs/installation/using-postcss`
`https://viblo.asia/p/ban-co-biet-ve-postcss-Qbq5QrkJKD8`
`https://dev.to/mustafamilyas/brief-explanation-of-javascript-module-bundler-b1k`
`https://viblo.asia/p/webpack-5-webpack-sass-loader-aWj533GP56m`