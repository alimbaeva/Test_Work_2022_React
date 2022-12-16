import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export const Header: FC = () => {
  const activeStyle = {
    textDecoration: 'underline',
    color: '#02132f',
  };

  return (
    <header>
      <div className="menu container">
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Статистика
        </NavLink>
        <NavLink to="/documents" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Документы
        </NavLink>
        <NavLink to="/expertCouncil" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Экспертный совет
        </NavLink>
        <NavLink to="/publications" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Публикации
        </NavLink>
        <NavLink to="/aboutProject" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          О проекте
        </NavLink>
      </div>
    </header>
  );
};
