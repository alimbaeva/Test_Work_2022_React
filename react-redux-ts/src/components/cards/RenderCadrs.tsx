import React, { FC } from 'react';
import { cardData } from '../../data/cardData';
import { Card } from './Card';
import './style/card.scss';

export const RenderCadrs: FC = () => {
  const renderCards = () => {
    return cardData.map((el) => {
      return <Card key={el.id} props={el} />;
    });
  };

  return (
    <div className="container">
      <div className="cards-block">{renderCards()}</div>
    </div>
  );
};
