import React, { FC } from 'react';
import './count.scss';

export const Count: FC = () => {
  return (
    <div className="container">
      <div className="count">
        <p>
          Всего объектов: <span>34</span>
        </p>
      </div>
    </div>
  );
};
