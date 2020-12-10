import {Card} from './Card.js'
import {useState} from 'react'

function App() {
  const [name, setName] = useState("Abishek")

  const ChangeNameHandler = (name) =>{
    setName(name)

  }

  const ChangeInputHandler = event => setName(event.target.value)

  
  const buttonMark = (
    <div>
      
    <button className="button">Green</button>
    <button className="button button2">Blue</button>
    </div>
  )

  return (
    <div >
      <button className="button" onClick={() => ChangeNameHandler("Abishek G.C")}>ChangeName</button>
      <Card 
        name={name} 
        title="Engineer"
        changeName={() => ChangeNameHandler("Avi")}
        changeInput={ChangeInputHandler}
        >
      </Card>
     
    </div>
  );
}

export default App;
