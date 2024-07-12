import React from 'react';
import './App.css';
import Card from './Card/card';
import CardHolder from './CardHolder/holder'

function App() {
  return (
    <div className="App">
      <h1>Playing Cards</h1>
      <div className="card-container">
        <div className="row">
          <Card suit="hearts" value="A" />
          <Card suit="hearts" value="K" />
          <Card suit="hearts" value="Q" />
          <Card suit="hearts" value="J" />
          <Card suit="hearts" value="10" />
          <Card suit="hearts" value="9" />
          <Card suit="hearts" value="8" />
          <Card suit="hearts" value="7" />
          <Card suit="hearts" value="6" />
          <Card suit="hearts" value="5" />
          <Card suit="hearts" value="4" />
          <Card suit="hearts" value="3" />
          <Card suit="hearts" value="2" />
          <Card suit="spades" value="A" />
          <Card suit="spades" value="K" />
          <Card suit="spades" value="Q" />
          <Card suit="spades" value="J" />
          <Card suit="spades" value="10" />
          <Card suit="spades" value="9" />
          <Card suit="spades" value="8" />
          <Card suit="spades" value="7" />
          <Card suit="spades" value="6" />
          <Card suit="spades" value="5" />
          <Card suit="spades" value="4" />
          <Card suit="spades" value="3" />
          <Card suit="spades" value="2" />
        </div>
         <div className="row">
          <Card suit="diamonds" value="A" />
          <Card suit="diamonds" value="K" />
          <Card suit="diamonds" value="Q" />
          <Card suit="diamonds" value="J" />
          <Card suit="diamonds" value="10" />
          <Card suit="diamonds" value="9" />
          <Card suit="diamonds" value="8" />
          <Card suit="diamonds" value="7" />
          <Card suit="diamonds" value="6" />
          <Card suit="diamonds" value="5" />
          <Card suit="diamonds" value="4" />
          <Card suit="diamonds" value="3" />
          <Card suit="diamonds" value="2" />
          <Card suit="clubs" value="A" />
          <Card suit="clubs" value="K" />
          <Card suit="clubs" value="Q" />
          <Card suit="clubs" value="J" />
          <Card suit="clubs" value="10" />
          <Card suit="clubs" value="9" />
          <Card suit="clubs" value="8" />
          <Card suit="clubs" value="7" />
          <Card suit="clubs" value="6" />
          <Card suit="clubs" value="5" />
          <Card suit="clubs" value="4" />
          <Card suit="clubs" value="3" />
          <Card suit="clubs" value="2" />
        </div>
      
      </div>

      <div>
        <div className='card-box'> 
          Hero 
          <CardHolder 
            initialCard1={{suit: 'hearts', value:"A"}}
            initialCard2={{suit: 'diamonds', value:"A"}}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
