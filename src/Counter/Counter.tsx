import React , {useState , useEffect} from 'react'
import "./style.css"




export const Counter = () => {
    let [conter , setcounter] = useState<number>(0);
    // console.log(value)
    // console.log("re-render function with new value : " ,conter )
    const  handlerCounterINC =() =>{

        setcounter(conter+1);
    }

    const  handlerCounterDEC =() =>{

        if(conter === 0){

           setcounter(0)

           return alert("Value IS ZERO , STOP")
        }
        else{

            setcounter(conter-1);
        }
    }


    useEffect(()=>{
        console.log("conuter mounted")

        return function (){
            console.log("Unmounted counter")
        }
    } ,[])
    //empty arr dep  ->whole components

    useEffect(()=>{
        console.log("User updated count" , conter)

        return () =>{
            console.log("counter useEffect return " , conter)

        }
    } ,[conter ])
   
  return (
   <>
             <h1 >Counter </h1>
            <h2> {conter}</h2>

            <button style={{background: "green"}}
             onClick={handlerCounterINC}
            >INC</button>
            <button style={{background: "red"}}
             onClick={ handlerCounterDEC}
            >DEC</button>
   </>
  )
}


export default Counter;