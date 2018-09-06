import React from "react";

const ToDoList = ({ todo }) => {
 const todoList = todo.length ? (
     todo.map( to_do =>{
         return (
             <div className="collection item" key={to_do.id}>
             <span className="center  purple-text">{to_do.title}</span>
             <span className="center  purple-text">{to_do.content}</span>
             </div>
         )
     })
 ) : (
     <p className="center"> You don't have any to do  </p>
 )
    return (
    <div>
      {todoList}
    </div>
  );
};

export default ToDoList;
