import React from "react";
import Todoitem from "./Todoiteam";
import "./style.css"

export interface TodoItemProps{
    id : number;
    title : string;
    content?: string;
  }
  
  interface Itodoitem{
   
    items: TodoItemProps[]
  }

const Todo : React.FC <Itodoitem>= (Props) =>{
    

    return (
 <div className="container">
           <ol>
               {
                Props.items.map((todo)=><Todoitem 
                title= {todo.title} key={todo.id}/>)
               }
           </ol>
 </div>
    )
};

export default Todo;