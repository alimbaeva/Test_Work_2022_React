import React, { FC } from 'react';
import { Filter } from './Filter';
import './style/advancedSearch.scss';

interface IInpContextFn {
  inpContextFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regionSearchFn: (region: string) => void;
}

export const AdvancedSearch: FC<IInpContextFn> = ({
  inpContextFn,
  regionSearchFn,
}: IInpContextFn) => {
  return (
    <div className="container">
      <div className="search">
        <div className="search__title">
          <div className="search__title-search">
            <p>Главная</p>
            <p className="search-text">Расширенный поиск</p>
          </div>
          <label>
            <input onChange={(e) => inpContextFn(e)} type="text" placeholder="Контекстный поиск" />
          </label>
        </div>
        <Filter regionSearchFn={regionSearchFn} />
      </div>
    </div>
  );
};
