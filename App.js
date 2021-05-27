import './app.css'
 import {useState} from 'react' 

// import Counter from './Counter'
function App() {

  const [toDos,setTodos]=useState([])
  const [toDo,setToDo]=useState('')
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date();
  var dayName = days[d.getDay()];
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's {dayName} 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false,delete:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
    <h2 className="left">Active Tasks</h2>
      { toDos.map((obj,index)=>{
        if(obj.delete===false){
       return ( <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked)
            console.log(obj)
            setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))
          }} type="checkbox" name="" id="" value={obj.status}/>
          <p>{(obj.status) ? <s>{obj.text}</s>: obj.text }</p>
        </div>
        <div className="right">
          <i  className="fas fa-times" id={obj.id} onClick={(e)=>
          {
            setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.delete=true
                return obj2
              }
              else{
          return obj
              }
            }))
            console.log(obj)
          }
            }></i>
        </div>
      </div>)
      }
      else{
        return null
      }
      }
      )}
    </div>
    <div className="todos">
    <h2 className="left">Completed Tasks</h2>
  {toDos.map((obj)=>{
    if(obj.status){
      return(<h1>{obj.text}</h1>)
    }
    return null
  })}
  </div>
  <div className="todos">
  <h2 className="left">Deleted Tasks</h2>
  {toDos.map((obj)=>{
    if(obj.delete){
      return (<h1>{obj.text}</h1>)
    }
    return null
  })}
  </div>
  </div>
);
}

export default App;




