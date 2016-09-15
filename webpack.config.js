const path = require('path')

module.exports = {
	context: __dirname,
    entry: "./app/app.jsx",
    output: {
    	path: path.join(__dirname,'/public/js'),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    watch: true,
    resolve: {
    	extensions: ['','.js','.jsx','.json']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true
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
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader" 
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000',
        include: path.join(__dirname, '/app/stylesheets/img')
}
    ]
   }
  }
