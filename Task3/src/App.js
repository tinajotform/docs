import React from 'react';
import Input from './inputSection'
import List from './listSection'

export default class App extends React.Component {

  state = {
    text: '',
    list: ["Default"]
  }

  add = (event) => {
    this.setState ({
      list : [...this.state.list, this.state.text],
      text: ''
    });
  }

  addWithEnter = (event) => {
    if(event.key === 'Enter'){
      this.setState ({
        list : [...this.state.list, this.state.text],
        text: ''
      });
    }
  }

  update = (event) => {
    this.setState ({ text : event.target.value })
  }

  render(){
    return (
      <header className="header">
        <h1>TODO LIST</h1>
        <Input 
          text={this.state.text} 
          updateText={this.update}
          onKeyPress={this.addWithEnter}
        />
        <button 
          type="button"
          className="button"
          onClick={this.add}
        >
          Add
        </button>
        <List 
          list={this.state.list}
        />
      </header> 
     )
  }
}





