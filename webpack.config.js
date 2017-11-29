const path = require('path');


const ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractCSS = new ExtractTextPlugin('[name].css');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports={
	  entry:{
       index:'./index.js',
       

	  },
    devtool:'source-map',
	  output:{
           filename:'[name].js',
           path: path.resolve(__dirname, 'build'),
           publicPath: 'build/'
	  },

	  module:{

	  	  rules:[
              
            {

            test:/\.js[x]?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            },
            {

            test:/\.less/,
            exclude:/node_modules/,
            loader:ExtractTextPlugin.extract(['css-loader','less-loader']),
            },

            // {
            //  	test:/\.vue/,
            //  	exclude:/node_modules/,
            //  	loader:'vue-loader',
            // },

             {
           
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                  {
                    loader: 'url-loader',
                  
                    options: {
                  
                      limit: 10000,
                    
                      name: 'images/[name].[hash].[ext]'
                    }
                   }
                 ]
              },



	  	  ]


	  },
     plugins: [
       extractCSS,
       new UglifyJSPlugin(),
       
    ]
    
}