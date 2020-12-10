import {Card} from './Card.js'

function App() {

  const buttonMark = (
    <div>
      
    <button className="button">Green</button>
    <button className="button button2">Blue</button>
    </div>
  )

  return (
    <div>
      <Card name="Ramesh" title="Engineer">
        {buttonMark}
      </Card>
      <Card name="Ram" title="doctor"/>
      <Card/>
    </div>
  );
}

export default App;
