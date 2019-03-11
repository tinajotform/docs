import React from 'react';
import Input from './inputSection'
import List from './listSection'

export default class App extends React.Component {

  state = {
    text: '',
    list: ["Default"]
  }

  add = (event) => {
    let isFounded = false;
    for(let i=0;i<this.state.list.length;i++){
      if(this.state.list[i] === this.state.text){
        alert("This element has already been added!");
        isFounded= true;
        return;
      }
    }
    if(this.state.text === ''){
      alert("Please write something!");
      return;
    }
    if(isFounded===false){
      this.setState ({
          list : [...this.state.list, this.state.text],
          text: ''
      });
    }
  }

  addWithEnter = (event) => {
    if(event.key === 'Enter'){
      let isFounded2 = false;
      for(let j=0;j<this.state.list.length;j++){
        if(this.state.list[j] === this.state.text){
          alert("This element has already been added!");
          isFounded2= true;
          return;
        }
      }
      if(this.state.text === ''){
        alert("Please write something!");
        return;
      }
      if(isFounded2===false){
        this.setState ({
          list : [...this.state.list, this.state.text],
          text: ''
        });
      }
    }
  }

  clear = (event) => {
    let isFounded3 = false;
    if(this.state.text === ''){
      alert("Please write something!");
      return;
    }
    else{
      for(let k=0; k<this.state.list.length; k++){
        if(this.state.list[k] === this.state.text) {
          isFounded3 = true;
          const firstArray = this.state.list.slice(0, k);
          const secondArray = this.state.list.slice(k + 1, this.state.list.length);
          this.setState ({
            list :[...firstArray , ...secondArray],
            text : ''
          });
          return;
        }
      }
      if(isFounded3 === false){
        alert("Element didn't be founded!");
      }
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
        <button 
          type="button"
          className="button"
          onClick={this.clear}
        >
          Clear
        </button>
        <List 
          list={this.state.list}
        />
      </header> 
     )
  }
}





