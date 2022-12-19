import React, { FC } from 'react';
import './style/statisiics.scss';

export const Title: FC = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Реестр объектов нематериального культурного наследия народов россии</h1>
        <label>
          <input type="text" placeholder="Поиск" />
        </label>
      </div>
    </div>
  );
};
