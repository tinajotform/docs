import React from 'react';
import Input from './inputSection'
import List from './listSection'
import Trash from './Trash'

export default class App extends React.Component {

  state = {
    text: '',
    list: [
      { text: 'Default', isDone: false}
    ],
    selected: {},
    trash: []
  }

  drag = (event) => {
    event.preventDefault()
  }

  addToTrash = (event) => {
    const { list, selected, trash } = this.state;
    let selectedText = selected.text;
    const newList = list.filter( item => item.text!==selectedText );

    this.setState ({
      trash : [...trash, { selectedText , isDone: false }],
      list : newList
    });
  }

  selectElement = (currentItem) => {
    const selectedElement = currentItem;
      this.setState ({
        selected: selectedElement
      })
   //  console.log(this.state.selected);
  }

  changeDoneStatus = (currentItem, targetIndex) => {
    const { list } = this.state;
    const newList = list.map((item,idx)=> {
      if (targetIndex === idx){
        return {...item, isDone : !item.isDone};
      }
      return item;
    })

    this.setState ({
      list: newList
    })

  }

  add = (event) => {
    const { text, list } = this.state;
    if(text === ''){
      alert("Write something!");
      return;
    }
    const element = list.find(element => element.text === text);
    if(element){
      alert("This element has already been added!");
      return;
    }
    else{
      this.setState ({
        list : [...list, { text, isDone: false }],
        text: ''
      });
    }
  }

  addWithEnter = (event) => {
    if(event.key === 'Enter')
      return this.add(event);
  }

  clear = (event) => {
    if(this.state.text === ''){
      alert("Write something!");
      return;
    }
    else{ 
      let element = this.state.list.find(element => element.text === this.state.text);
      if(element === undefined){
        alert("Element didn't be founded!");
      }
      else{
        this.setState ({
            list : this.state.list.filter( item => item.text!==this.state.text ),
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
        <h1 style={{ color: "47b924" }}>TO-DO LIST</h1>
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
        <br></br>
        <p>Number: {this.state.list.length}</p>
        <Trash
          onDragOver={this.drag}
          onDrop={this.addToTrash}
          trash={this.state.trash}
        />
        <List     
          list={this.state.list}
          onClick = {this.changeDoneStatus.bind(this)}
          onDragStart = {this.selectElement}
        />
      </header> 
     )
  }
}





