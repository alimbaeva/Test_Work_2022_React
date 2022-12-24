import React, { FC } from 'react';
import { RenderCadrs } from '../../components/cards/RenderCadrs';
import { AdvancedSearch } from '../../components/statistics/AdvancedSearch';
import { Title } from '../../components/statistics/Title';

export const Statistics: FC = () => {
  return (
    <>
      <Title />
      <AdvancedSearch />
      <RenderCadrs />
    </>
  );
};
