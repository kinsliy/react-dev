
import React from 'react';
import ReactDOM from 'react-dom';



// const Name = React.createClass({
//   render() {
//     return (
//       <h1>{this.props.name}</h1>
//     );
//   }
// });

import Name from '../components/name.jsx';

// class Name extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render(){
//   	  return(

//   	  	   <h1>{this.props.name}</h1>
//   	  )
//   }

// }


     ReactDOM.render(
	   <Name name='kinsliy'></Name>,
	  document.getElementById('body')
    );