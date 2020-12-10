import {Card} from './Card.js'
import {useState} from 'react'

function App() {
  const [name, setName] = useState("Abishek")
  
  const [showCard, setShowCard] = useState(true)

  const [cardButton, setcardButton] = useState("Hide")

  const toggleShowCard = () =>{
    showCard? setcardButton("Show") : setcardButton("Hide");
    setShowCard(!showCard)
    
  }
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
      <button className="button" onClick={toggleShowCard}>{cardButton}</button>
      {showCard &&
        <Card 
          name={name} 
          title="Engineer"
          changeName={() => ChangeNameHandler("Avi")}
          changeInput={ChangeInputHandler}
          >
        </Card>
      }     
    </div>
  );
}

export default App;
