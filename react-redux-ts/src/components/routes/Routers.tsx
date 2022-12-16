import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutProject } from '../../pages/aboutProject/AboutProject';
import { Documents } from '../../pages/documentsPage/Documents';
import { ExpertCouncil } from '../../pages/expertCouncil/ExpertCouncil';
import { Publications } from '../../pages/publications/Publications';
import { Statistics } from '../../pages/statistics/Statistics';
import { Layout } from '../layout/Layout';

export const Routers: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Statistics />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/expertCouncil" element={<ExpertCouncil />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/aboutProject" element={<AboutProject />} />
      </Route>
    </Routes>
  );
};
