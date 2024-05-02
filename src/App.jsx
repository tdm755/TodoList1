import { useState } from 'react'
import List from './components/list.jsx'
import './App.css'

function App() {
  const [inputVal, setInputVal] = useState("");
  const [cont, setCont] = useState([]);

  function addInputVal(e){
    setInputVal(e.target.value);
  }

  function addItem(){
    
    setCont((preVal) =>{
      return [...preVal, inputVal]
    })
    setInputVal("");
    
  }

  function deleteItem(e) {
    console.log(e.target);
    let clickedVal = e.target;
    let liele = clickedVal.parentElement;
    liele.remove();
  }


 

  return (
    <>      
      <div className="TDL polka-dot">  
    <div class="heading">
      <img src="./src/assets/pngwing.com.png" alt="" />
      <h1>ToDo List</h1>
    </div>        
        <div className="userInput">
            <input onChange={addInputVal} type="text" value={inputVal} />
            <button onClick={addItem}>Add</button>
        </div>
        <div className="addedContent">
          <ul>
            {cont.map((item, index)=>{
                return <List key={index} text = {item} checked={deleteItem}/>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
