import React, { FC } from 'react';
import { Filter } from './Filter';
import './style/advancedSearch.scss';

interface IInpContextFn {
  inpContextFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AdvancedSearch: FC<IInpContextFn> = ({ inpContextFn }: IInpContextFn) => {
  return (
    <div className="container">
      <div className="search">
        <div className="search__title">
          <div className="search__title-search">
            <p>Главная</p>
            <p className="search-text">Расширенный поиск</p>
          </div>
          <label>
            {/* <input ref={inpContextFn()} type="text" placeholder="Контекстный поиск" /> */}
            <input onChange={(e) => inpContextFn(e)} type="text" placeholder="Контекстный поиск" />
          </label>
        </div>
        <Filter />
      </div>
    </div>
  );
};
