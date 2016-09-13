const path = require('path')

module.exports = {
	context: __dirname,
    entry: "./app/app.jsx",
    output: {
    	path: path.join(__dirname,'/public/js'),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    resolve: {
    	extensions: ['','.js','.jsx','.json']
    },
    devtool: '#source-map',
    module: {
    	preLoaders: [
    	{
    		test: /\.jsx?$/,
        	loader: 'eslint-loader'
    	}
    	],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '/app')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
   }
  }
