import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
function App() {
  const [value,setValue] = useState([])
  const input = useRef(null)
  function btn(){
    if(input.current.value){

      setValue([...value,...[input.current.value]])
      input.current.value = ``
    }
  }
  function del (index){
    const a = [...value]
    a.splice(index,1)
    setValue(a)
  }
  useEffect(()=>{
    const v = localStorage.getItem(`task`)
    localStorage.setItem(`task`,v)
    setValue(JSON.parse(v))
  },[])
  useEffect(()=>{
    localStorage.setItem(`task`,JSON.stringify(value))
    console.log(value )
},[value])
  
  return (
<div className='App'>
      <h1>Todo List</h1>
      <div className='form'>
      <input type='text' ref={input} />
    <button onClick={btn}>Add task</button>
      </div>
      <div className='tasks'>
        {value.map((e,index)=>{
          return(<div className='task-item'key={index}>
            <input type='checkbox' />
            <div className='task-value'><div >{e} </div> </div>
            <span className='delete-task' onClick={()=>{del(index)}}>X</span></div>) 
        })}
      </div>
      
</div>
  )

}


export default App;