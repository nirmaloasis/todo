import React, { Component } from 'react';
import ToDoItems from './ToDoItems';

class TodoList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            items: []
          };
        this.addItem = this.addItem.bind(this);
        this.edit = this.edit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.markItem = this.markItem.bind(this)
        this.completeItem = this.completeItem.bind(this)
        this.sortItem = this.sortItem.bind(this)
      }
       edit(key,text){
        var {items} = this.state;
        for(let i=0;i<items.length;++i)
            if(items[i].key == key){
             items[i].text = text
             break;
            } 
        this.setState({items})
       }
      addItem(e) {
        var {items} = this.state;
        
         if (this.newtask.value !== "") {

           items.unshift(
             {
               text: this.newtask.value,
               marked:false,
               completed:false,
               key: Date.now()
             }
           );
           items = this.sortItem(items)
           this.setState({
             items
           });
        
           this.newtask.value = "";
         }
        
        
          
         e.preventDefault();
     
      }
      sortItem(items){
          var markedItems = items.filter((e) => e.marked&& !e.completed)
          var completedItems = items.filter((e) => e.completed)
          var other = items.filter((e) =>  !e.completed & !e.marked)
                   
           return [...markedItems,...other,...completedItems]

      }
      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
      markItem(key){
        var {items} = this.state;
        for(let i=0;i<items.length;++i)
            if(items[i].key == key){
             items[i].marked = true
             break;
            } 
            items = this.sortItem(items)
        this.setState({items})
      }
      completeItem(key){
        var {items} = this.state;
        for(let i=0;i<items.length;++i)
            if(items[i].key == key){
             items[i].completed = true
             break;
            } 
            items = this.sortItem(items)
        this.setState({items})
      }
 render() {
    return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input ref={(a) => this.newtask = a}  placeholder="enter task">
              </input>
              <button type="submit">add</button>
            </form>
          </div>
          <ToDoItems entries={this.state.items} markItem={this.markItem} completeItem={this.completeItem} edit={this.edit} delete={this.deleteItem}/>
        </div>
      );
 }
};

export default TodoList;