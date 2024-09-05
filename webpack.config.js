const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
        {
            test: /\.scss$/i,
            include: path.resolve(__dirname, './src/styles/'),
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                },
                'postcss-loader', // Handles Tailwind and other PostCSS plugins,
                {
                    loader: 'sass-loader',
                    options: {
                      sassOptions: {outputStyle: 'expanded'},
                      sourceMap: true
                    }
                  }
            ],
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
            type: 'asset/resource',
            generator: {
                filename: 'webfonts/[name][ext]', // Output to 'webfonts' directory in 'dist'
            },
        },
    ],
  },
}
