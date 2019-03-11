import React from 'react';
import Input from './inputSection'
import List from './listSection'

export default class App extends React.Component {

  state = {
    text: '',
    list: ["Default"]
  }

  add = (event) => {
    if(this.state.text === ''){
      alert("Write something!");
      return;
    }
    else{
      let element = this.state.list.find(element => element === this.state.text);
      if(element !== undefined){
        alert("This element has already been added!");
        return;
      }
      else{
        this.setState ({
          list : [...this.state.list, this.state.text],
          text: ''
        });
      }
    }
  }

  addWithEnter = (event) => {
    if(event.key === 'Enter'){
      if(this.state.text === ''){
        alert("Write something!");
        return;
      }
      else{
        let element = this.state.list.find(element => element === this.state.text);
        if(element !== undefined){
          alert("This element has already been added!");
          return;
        }
        else{
          this.setState ({
            list : [...this.state.list, this.state.text],
            text: ''
          });
        }
      }
    }
  }

  clear = (event) => {
    if(this.state.text === ''){
      alert("Write something!");
      return;
    }
    else{ 
      let element = this.state.list.find(element => element === this.state.text);
      if(element === undefined){
        alert("Element didn't be founded!");
      }
      else{
        this.setState ({
            list : this.state.list.filter( item => item!==this.state.text ),
            text : ''
          });
      }
    }
  }

  clearAll = (event) => {
      this.setState ({
        list: [],
        text: ''
      });
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
        <button 
          type="button"
          className="button"
          onClick={this.clear}
        >
          Clear
        </button>
        <button 
          type="button"
          className="button"
          onClick={this.clearAll}
        >
          Clear All
        </button>
        <List 
          list={this.state.list}
        />
      </header> 
     )
  }
}





