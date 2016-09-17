const path = require('path')

module.exports = {
	context: __dirname,
    entry: "./app/app.jsx",
    output: {
    	path: path.join(__dirname,'/public/js'),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map",
        publicPath:"/js/"
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
         test: /\.(jpe?g|png|gif)$/i,
         loaders: [
         'file?hash=sha512&digest=hex&name=[hash].[ext]',
         'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
      },
      {
        test: /\.svg/, 
        loader: 'svg-url-loader'
      }
    ]
   }
  }
