import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addtask, deletetask,donetask, edittask } from './Js/Action/Action';
import { useState } from 'react';


function App() {
  const [text, settext] = useState("")
  const dispatch = useDispatch()

  const tasks = useSelector(state => state.todoliste)
  
  return (
    <div className="App">
 <input type="text" onChange={(e)=>settext(e.target.value)} />
 <button onClick={()=>dispatch(addtask({text:text,id:Math.random(),isDone:false}))}>click</button>


 <div>
   {tasks.map(el=><div>
    <h1 onClick={()=>dispatch(donetask(el.id))} className={el.isDone?"decored":null}>{el.text}</h1>
    <button onClick={()=>dispatch(deletetask(el.id))}>delete</button>
    <button onClick={()=>dispatch(edittask({id:el.id ,task: text}))}   >edit</button>

   </div>)}
 </div>

    </div>
  );
}

export default  App;
