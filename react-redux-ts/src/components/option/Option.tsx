import React, { FC } from 'react';
import { IOptions } from '../../types/types';

interface IProps {
  prop: IOptions;
}

export const Option: FC<IProps> = ({ prop }: IProps) => {
  return (
    <select id={prop.id}>
      <option value="">{prop.placeholder}</option>
      {prop.options.nation.map((el, id) => {
        return (
          <option key={id} value={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
};
