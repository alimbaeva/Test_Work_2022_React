import React, { FC, useState } from 'react';
import { RenderCadrs } from '../../components/cards/RenderCadrs';
import { Count } from '../../components/cuont/Count';
import { AdvancedSearch } from '../../components/statistics/AdvancedSearch';
import { Title } from '../../components/statistics/Title';

export const Statistics: FC = () => {
  const [inpContext, setInpContext] = useState('');

  const inpContextFn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpContext(e.target.value);
    console.log(inpContext);
  };
  return (
    <>
      <Title />
      <AdvancedSearch inpContextFn={inpContextFn} />
      <Count />
      <RenderCadrs inpContext={inpContext} />
    </>
  );
};
