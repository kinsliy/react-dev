const path = require('path');

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
    
}