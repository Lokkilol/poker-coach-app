
import React from 'react';
import './index.css'; 

interface PlayingCardProps {
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value: string;
}

const PlayingCard: React.FC<PlayingCardProps> = ({ suit, value }) => {
  const getSuitSymbol = (suit: string) => {
    switch (suit) {
      case 'hearts':
        return '♥';
      case 'diamonds':
        return '♦';
      case 'clubs':
        return '♣';
      case 'spades':
        return '♠';
      default:
        return '';
    }
  };

  return (
    <div className={`playing-card ${suit}`}>
      <div className="value">{value}</div>
      <div className="suit">{getSuitSymbol(suit)}</div>
    </div>
  );
};

export default PlayingCard;