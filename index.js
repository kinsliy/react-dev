
import React from 'react';
import ReactDOM from 'react-dom';


// const Name = React.createClass({
//   render() {
//     return (
//       <h1>{this.props.name}</h1>
//     );
//   }
// });

import Name from './name.js';



     ReactDOM.render(
	   <Name name='kinsliy'></Name>,
	  document.getElementById('body')
    );