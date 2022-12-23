import React, { FC } from 'react';
import { AdvancedSearch } from '../../components/statistics/AdvancedSearch';
import { Title } from '../../components/statistics/Title';

export const Statistics: FC = () => {
  return (
    <>
      <Title />
      <AdvancedSearch />
    </>
  );
};
