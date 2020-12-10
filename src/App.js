import {Card} from './Card.js'
import {useState} from 'react'

function App() {
  const [name, setName] = useState("Abishek")

  const ChangeNameHandler = () =>{
    setName("Abishek G.C")

  }

  const buttonMark = (
    <div>
      
    <button className="button">Green</button>
    <button className="button button2">Blue</button>
    </div>
  )

  return (
    <div >
      <button className="button" onClick={ChangeNameHandler}>ChangeName</button>
      <Card name={name} title="Engineer">
      </Card>
     
    </div>
  );
}

export default App;
