import React, { FC, useState } from 'react';
import { RenderCadrs } from '../../components/cards/RenderCadrs';
import { Count } from '../../components/cuont/Count';
import { AdvancedSearch } from '../../components/statistics/AdvancedSearch';
import { Title } from '../../components/statistics/Title';

export const Statistics: FC = () => {
  const [inpContext, setInpContext] = useState('');
  const [regionSearch, setRegionSearch] = useState('');

  const inpContextFn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpContext(e.target.value);
  };
  const regionSearchFn = (region: string) => {
    setRegionSearch(region);
  };
  return (
    <>
      <Title />
      <AdvancedSearch inpContextFn={inpContextFn} regionSearchFn={regionSearchFn} />
      <Count />
      <RenderCadrs inpContext={inpContext} regionSearch={regionSearch} />
    </>
  );
};
