import React, { FC, useRef } from 'react';
import './style/advancedSearch.scss';

interface ISearch {
  regionSearchFn: (region: string) => void;
}

export const Filter: FC<ISearch> = ({ regionSearchFn }: ISearch) => {
  const selectEthnic = useRef(null);
  const selectCategories = useRef(null);
  const selectRegions = useRef(null);
  const selectLanguages = useRef(null);
  const selectTags = useRef(null);
  const selectAuthors = useRef(null);

  const handleForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const selectReg = selectRegions.current as unknown as HTMLSelectElement;

    const region = selectReg.value;
    regionSearchFn(region);
  };

  return (
    <div className="container">
      <div className="filter">
        <form className="filter__options">
          <select id="ethnic-groups" ref={selectEthnic}>
            <option value="">Все этносы</option>
            <option value="Татары">Татары</option>
            <option value="Русские">Русские</option>
            <option value="Украинцы">Украинцы</option>
            <option value="Башкиры">Башкиры</option>
            <option value="Чуваши">Чуваши</option>
          </select>
          <select id="categories" ref={selectCategories}>
            <option value="">Все категории</option>
            <option value="Татары">Татары</option>
            <option value="Русские">Русские</option>
            <option value="Украинцы">Украинцы</option>
            <option value="Башкиры">Башкиры</option>
            <option value="Чуваши">Чуваши</option>
          </select>
          <select id="regions" ref={selectRegions}>
            <option value="">Все регионы</option>
            <option value="Липецкая область">Липецкая область</option>
            <option value="Смоленская область">Смоленская область</option>
            <option value="Волгоградская область">Волгоградская область</option>
            <option value="Сахалинская область">Сахалинская область</option>
            <option value="Чувашская область">Чувашская область</option>
            <option value="Дагестанская область">Дагестанская область</option>
          </select>
          <select id="languages" ref={selectLanguages}>
            <option value="">Все языки</option>
            <option value="Татары">Татары</option>
            <option value="Русские">Русские</option>
            <option value="Украинцы">Украинцы</option>
            <option value="Башкиры">Башкиры</option>
            <option value="Чуваши">Чуваши</option>
          </select>
          <select id="alltags" ref={selectTags}>
            <option value="">Все теги</option>
            <option value="Татары">Татары</option>
            <option value="Русские">Русские</option>
            <option value="Украинцы">Украинцы</option>
            <option value="Башкиры">Башкиры</option>
            <option value="Чуваши">Чуваши</option>
          </select>
          <select id="authors" ref={selectAuthors}>
            <option value="">Все авторы</option>
            <option value="Татары">Татары</option>
            <option value="Русские">Русские</option>
            <option value="Украинцы">Украинцы</option>
            <option value="Башкиры">Башкиры</option>
            <option value="Чуваши">Чуваши</option>
          </select>
          <button type="submit" onClick={(e) => handleForm(e)}>
            Поиск
          </button>
        </form>
      </div>
    </div>
  );
};
