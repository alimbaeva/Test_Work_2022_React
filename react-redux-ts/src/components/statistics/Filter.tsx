import React, { FC } from 'react';
import { dataOptins } from '../../data/options';
import { Option } from '../option/Option';
import './style/advancedSearch.scss';

export const Filter: FC = () => {
  const optionsFn = () => {
    const options = dataOptins.map((el) => {
      return <Option key={el.id} prop={el} />;
    });
    return options;
  };

  return (
    <div className="container">
      <div className="filter">
        <form className="filter__options">
          {optionsFn()}
          <button type="submit">Поиск</button>
        </form>
      </div>
    </div>
  );
};
