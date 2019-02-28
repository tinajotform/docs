import React from 'react';
import Input1 from './inputSection';
class Header extends React.Component {

 /* constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }*/

  render(){

    return (
      <div className="header">
        <h1>TODO LIST</h1>
      </div> 
     )
  }
}

export default Header
