 import React from 'react';


import './name.less';
class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render(){
  	  return(

  	  	   <h1 id='hello'>{this.props.name}</h1>
  	  )
  }

}

export default Name;