import React, { useState } from 'react'
import PlayingCard from '../Card/card'

interface Card {
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value: string;
}

interface CardHolderProps {
  initialCard1: Card;
  initialCard2: Card;
}

const CardHolder: React.FC<CardHolderProps> = ({initialCard1, initialCard2}) => {
    const [cards, setCards] = useState<Card[]>([initialCard1, initialCard2])

    const modifyCards = (newCard1: Card, newCard2: Card) => {
        setCards([newCard1, newCard2])
    }

    return(
        <div className='card-holder'>
            {cards.map((card, index) => 
            <PlayingCard suit={card.suit} value={card.value}></PlayingCard>)}
        </div>
    )
}

export default CardHolder

