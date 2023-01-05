import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

export const Layout = () => {
  const windowOuterHeight = window.outerHeight;
  const liStyle = { minHeight: `${windowOuterHeight - 300}px` };
  return (
    <>
      <Header />
      <div style={liStyle} className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
