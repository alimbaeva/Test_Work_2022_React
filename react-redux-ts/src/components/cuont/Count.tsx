import React, { FC } from 'react';
import { cardData } from '../../data/cardData';
import './count.scss';

export const Count: FC = () => {
  return (
    <div className="container">
      <div className="count">
        <p>
          Всего объектов: <span>{cardData.length}</span>
        </p>
      </div>
    </div>
  );
};
