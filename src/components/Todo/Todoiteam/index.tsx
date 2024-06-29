import React from 'react'
import "./style.css"

export interface TodoItemProps{
  title : string;
  content?: string;
}

export const Todoitem :React.FC <TodoItemProps>= (Props) => {
  console.log("props : " , Props)
  return (
   <>
  
      <li>{Props.title}</li>
            
      
   </>
  )
};

export default Todoitem;