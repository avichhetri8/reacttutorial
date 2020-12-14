
import React, {Component} from 'react'
import {Card} from './Card.js'
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    console.log("dagatat")
    super(props);
    this.toggleShowCard = this.toggleShowCard.bind(this)
    this.ChangeNameHandler = this.ChangeNameHandler.bind(this)
    this.ChangeInputHandler = this.ChangeInputHandler.bind(this)
    this.onChangeHanlder = this.onChangeHanlder.bind(this)
    this.DeleteHandler = this.DeleteHandler.bind(this)
   
    this.state = {
        cards:[
        { 
          id:1,
          name:"Ram", 
          title:"Engineer",
          avatar:logo
        },
        {
          id:2,
          name:"Shayam" ,
          title:"Computer Engineer",
          avatar:logo
        }
      ],
      showCard : true,
      cardButton : 'Hide'
      };
     
  }
  // const [name, setName] = useState("Abishek")
  // setShowCard = this.setuseState(true)
  // const [cardButton, setcardButton] = useState("Hide")
  // const [cards, setCards] = useState()
  toggleShowCard = () => {
    this.setState({showCard: !this.state.showCard})
    this.state.showCard ? this.setState({cardButton : "Show"}) : this.setState({cardButton : "Hide"})
 
  }

        
  
  componentWillUnmount(){
   
  }
  ChangeNameHandler = (name) =>{
    this.setState({name: name})

  }
  DeleteHandler = (cardIndex)=> {
      const copy_card = [...this.state.cards]
      console.log("c1",copy_card)
      copy_card.splice(cardIndex,1)
      console.log("c2",copy_card)
      this.setState({cards:copy_card})
  }

  ChangeInputHandler = event =>  this.setState({name: event.target.value})

  onChangeHanlder= (event,key)=>{
    //to find the card
    const cardIndex = this.state.cards.findIndex(card=>card.id === key)
    console.log("key",key, cardIndex)
    //to copy
    const copy_card = [...this.state.cards]
    //
    copy_card[cardIndex].name = event.target.value
    this.setState({cards:copy_card})
  }

  
  render(){
    const cardMark = this.state.showCard &&  this.state.cards.map((card,index) => (<Card 
      name={card.name} avatar={card.avatar} title={card.title}
      key={card.id}
      onDelete={()=>{this.DeleteHandler(index)}}
      onChange={(event)=>this.onChangeHanlder(event,card.id)}
            >
        hello
    </Card>
  ))
  return (
    <div >
      <button className="button" onClick={this.toggleShowCard.bind(this)}>{this.state.cardButton}</button>
           {cardMark}
    </div>
  );
}
}

export default App;
