import {Card} from './Card.js'
import {useState} from 'react'
import logo from './logo.svg';

function App() {
  const [name, setName] = useState("Abishek")
  const [showCard, setShowCard] = useState(true)
  const [cardButton, setcardButton] = useState("Hide")
  const [cards, setCards] = useState([{ 
    id:1,
    name:"Ram", 
    title:"Engineer",
    avatar : logo
  },
  {
    id:2,
    name:"Shayam" ,
    title:"Computer Engineer",
    avatar : logo

  }
])
  const toggleShowCard = () =>{
    showCard? setcardButton("Show") : setcardButton("Hide");
    setShowCard(!showCard)
    
  }
  const ChangeNameHandler = (name) =>{
    setName(name)

  }
  const DeleteHandler = (cardIndex)=> {
      const copy_card = [...cards]
      console.log("c1",copy_card)
      copy_card.splice(cardIndex,1)
      console.log("c2",copy_card)
      setCards(copy_card)
  }

  const ChangeInputHandler = event => setName(event.target.value)

  const onChangeHanlder= (event,key)=>{
    //to find the card
    const cardIndex = cards.findIndex(card=>card.id == key)
    console.log("key",key, cardIndex)
    //to copy
    const copy_card = [...cards]
    //
    copy_card[cardIndex].name = event.target.value
    setCards(copy_card)
  }
  const cardMark = showCard &&  cards.map((card,index) => (<Card 
      name={card.name} avatar={card.avatar} title={card.title}
      key={card.id}
      onDelete={()=>{DeleteHandler(index)}}
      onChange={(event)=>onChangeHanlder(event,card.id)}
            >
        hello
    </Card>
  ))
  const buttonMark = (
    <div>
      <button className="button">Green</button>
      <button className="button button2">Blue</button>
    </div>
  )

  return (
    <div >
      <button className="button" onClick={toggleShowCard}>{cardButton}</button>
           {cardMark}
    </div>
  );
}

export default App;
