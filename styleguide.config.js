const path = require('path')

module.exports = {
  styleguideDir: 'docs',
  title: 'Tailwind CSS React UI',
  styles: {
    Code: {
      code: {
        color: 'rgb(128, 90, 213)',
        backgroundColor: 'rgb(247, 250, 252)',
        padding: '0 4px',
        fontFamily: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
      },
    },
  },
  require: [path.join(__dirname, 'style/output.css')],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
      ],
    },
  },
}
