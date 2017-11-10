import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import SingleTodoItem from './SingleTodoItem'
class TodoItems extends React.Component {
 constructor(props, context) {
   super(props, context);
   
   this.createTasks = this.createTasks.bind(this);
   this.delete = this.delete.bind(this);
 }

 createTasks(item) {
    
 }

 delete(key) {
    this.props.delete(key);
  }

 render() {
   var {entries} = this.props;
   
  
   return (
     <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
         {entries.map((e)=> <SingleTodoItem item={e} {...this.props} delete={this.delete}/>)}
         </FlipMove> 
     </ul>
   );
 }
};

export default TodoItems;