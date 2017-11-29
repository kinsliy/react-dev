const path = require('path');


const ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractCSS = new ExtractTextPlugin('[name].css');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	  entry:{
       index:'./src/index.js',
       detail:'./src/detail.js',
       

	  },
    devtool:'source-map',
	  output:{
           filename:'[name].js',
           path: path.resolve(__dirname, 'build'),
           publicPath: './',
	  },

	  module:{

	  	  rules:[
              
            {

            test:/\.js[x]?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            },
            {

            test:/\.css/,
            exclude:/node_modules/,
            use:['css-loader','style-loader'],
            },
            {

            test:/\.less/,
            exclude:/node_modules/,
            loader:ExtractTextPlugin.extract(['css-loader','less-loader','postcss-loader']),
            },

        
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
       new OptimizeCssAssetsPlugin({
    
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
       }),
       // new HtmlWebpackPlugin(
       //    {
       //      hash:true,
       //      title:'hello world',
       //      template:'./index.html',

       //    }
       //  ),
       // new HtmlWebpackPlugin(
       //    {
       //      hash:true,
       //      title:'hello world',
       //      template:'./index.html',
       //      filename:'./detail.html',
            
       //    }
       //  ),
       
    ],
    
    
}