const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/scripts/index.js',
    // project: './src/scripts/project.js',
    // projectList: './src/scripts/projectList.js',
    // todo: './src/scripts/todo.js',
    // setAttrs: './src/scripts/setAttrs.js',
    // displayProject: './src/scripts/displayProject.js',
    // displayModal: './src/scripts/displayModal.js',
    // addProject: './src/scripts/addProject.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'imgs/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      },
    ],
  },
};