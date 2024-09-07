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
- `https://gist.github.com/bradtraversy/1c93938c1fe4f10d1e5b0532ae22e16a`
- `https://dev.to/j45t7/webpack-tailwind-css-setup-35bm`
- `https://tailwindcss.com/docs/installation/using-postcss`
- `https://viblo.asia/p/ban-co-biet-ve-postcss-Qbq5QrkJKD8`
- `https://dev.to/mustafamilyas/brief-explanation-of-javascript-module-bundler-b1k`
- `https://viblo.asia/p/webpack-5-webpack-sass-loader-aWj533GP56m`
- `https://paugramming.medium.com/tailwind-css-plus-fontawesome-webpack-configuration-for-phoenix-framework-4a7691ae8c33`
- `https://gist.github.com/pau-riosa/1092ebb7c4f8b91448ce3e5b9a92c82c`


II. DOING
- `https://preview.themeforest.net/item/norebro-creative-multipurpose-wordpress-theme/full_screen_preview/20834703?_ga=2.233063900.31817396.1725270507-1341890354.1718803587&_gac=1.121187962.1724748537.CjwKCAjw8rW2BhAgEiwAoRO5rEP1_z4JIfxBkeAg-5OXjX2m99qFwwfIsNpyT8P4Bi45TtUjozsgRxoCot4QAvD_BwE`
- `https://norebro.clbthemes.com/demo18/`
- `https://preview.themeforest.net/item/atook-roofing-services-elementor-template-kit/full_screen_preview/39490947?_ga=2.179015270.31817396.1725270507-1341890354.1718803587&_gac=1.223495017.1724748537.CjwKCAjw8rW2BhAgEiwAoRO5rEP1_z4JIfxBkeAg-5OXjX2m99qFwwfIsNpyT8P4Bi45TtUjozsgRxoCot4QAvD_BwE`
- `https://preview.themeforest.net/item/agencium-creative-agency-portfolio-wordpress-theme/full_screen_preview/48722133?_ga=2.253463115.31817396.1725270507-1341890354.1718803587&_gac=1.24136264.1724748537.CjwKCAjw8rW2BhAgEiwAoRO5rEP1_z4JIfxBkeAg-5OXjX2m99qFwwfIsNpyT8P4Bi45TtUjozsgRxoCot4QAvD_BwE`
- `http://preview.themeforest.net/item/inox-kitchen-interior-design-template/full_screen_preview/23468898?_ga=2.177424103.31817396.1725270507-1341890354.1718803587&_gac=1.220335978.1724748537.CjwKCAjw8rW2BhAgEiwAoRO5rEP1_z4JIfxBkeAg-5OXjX2m99qFwwfIsNpyT8P4Bi45TtUjozsgRxoCot4QAvD_BwE`
