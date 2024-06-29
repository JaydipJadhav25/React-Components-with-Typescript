import React from 'react'
import Todo from './components/Todo';
import "./app.css"
import  TODO from "./todos.js"

console.log("dodo" , TODO.TODOS)
const myTodoitems = TODO.TODOS;
//  [

//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "fugiat veniam minus",
//     "completed": false
//   },
// ]



export const  App : React.FC  = () => {
  return (
    <>   

<h1>ToDos</h1>
<div>TodoItems :</div>
          <div className='maincontainer'  style={{border:"5px solid black"}}
               onClick={(e) => alert("hiii , goodmoring")}
           > 
          
           <Todo items={myTodoitems}/>
           {/* <Todo items={myTodoitems}/> */}
         
          
          </div>
     </>
  )
}

export default App;
