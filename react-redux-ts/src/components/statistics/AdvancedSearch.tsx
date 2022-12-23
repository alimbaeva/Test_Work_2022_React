import React, { FC } from 'react';
import { Filter } from './Filter';
import './style/advancedSearch.scss';

export const AdvancedSearch: FC = () => {
  return (
    <div className="container">
      <div className="search">
        <div className="search__title">
          <div className="search__title-search">
            <p>Главная</p>
            <p className="search-text">Расширенный поиск</p>
          </div>
          <label>
            <input type="text" placeholder="Контекстный поиск" />
          </label>
        </div>
        <Filter />
      </div>
    </div>
  );
};
