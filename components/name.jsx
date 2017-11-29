 import React from 'react';


import '../less/name.less';


class Name extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render(){
  	  return(
           <div>

  	  	   <span id='hello'>{this.props.name}</span>
  	  	   <img src='./imgs/square.png' />
  	  	   </div>
  	  )
  }

}

export default Name;