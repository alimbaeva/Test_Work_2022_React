import React, { FC, useEffect, useState } from 'react';
import { cardData } from '../../data/cardData';
import { Card } from './Card';
import { ICard } from '../../types/types';
import { PaginationBtn } from '../paginationBtn/PaginationBtn';
import './style/card.scss';

interface IContext {
  inpContext: string;
  regionSearch: string;
}

export const RenderCadrs: FC<IContext> = ({ inpContext, regionSearch }: IContext) => {
  const [curentPage, setCurentPage] = useState('1');
  const [cardsOnPage, setcardsOnPage] = useState(12);
  const [noCard, setNoCard] = useState(false);
  const [cards, setCards] = useState<ICard[]>(cardData.slice(0, cardsOnPage));
  const allPageNumbers = Math.ceil(cardData.length / cardsOnPage);

  const renderCards = () => {
    return cards.map((el) => {
      return <Card key={el.id} props={el} />;
    });
  };

  const searchText = () => {
    if (inpContext.length > 0) {
      const filterCards = cardData.filter((card) => card.title.includes(inpContext));
      setCards(filterCards);
      if (filterCards.length === 0) setNoCard(true);
      if (filterCards.length !== 0) setNoCard(false);
    }
  };

  const searchReg = () => {
    if (regionSearch.length > 0) {
      const filterCards = cardData.filter((card) => card.region.includes(regionSearch));
      setCards(filterCards);
      if (filterCards.length === 0) setNoCard(true);
      if (filterCards.length !== 0) setNoCard(false);
    }
  };

  useEffect(() => {
    searchText();
    if (inpContext.length === 0) {
      setCards(cardData.slice(0, cardsOnPage));
      setNoCard(false);
    }
  }, [inpContext]);

  useEffect(() => {
    searchReg();
    if (regionSearch.length === 0) {
      setCards(cardData.slice(0, cardsOnPage));
      setNoCard(false);
    }
  }, [regionSearch]);

  const paginate = (
    pageNumber: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    btnChilde: ChildNode | null | undefined
  ) => {
    let btn: HTMLButtonElement;
    if (!!e) btn = e.target as HTMLButtonElement;
    const buttons: ChildNode | NodeListOf<ChildNode> | undefined = btnChilde
      ? btnChilde.childNodes
      : btn!.parentElement?.childNodes;
    if (!buttons) return;
    buttons.forEach((el: ChildNode) => {
      const btn = el as HTMLButtonElement;
      btn.classList.remove('active');

      if (btn.textContent === String(pageNumber + 1)) btn.classList.add('active');
    });

    const start = (Number(pageNumber + 1) - 1) * cardsOnPage;
    const end = start + cardsOnPage;
    setCurentPage(String(pageNumber + 1));
    setCards(cardData.slice(start, end));
    setNoCard(false);
  };

  return (
    <div className="container">
      {noCard && <h3>Извините по вашему запросу ничего не найдено.</h3>}
      <div className="cards-block">{renderCards()}</div>
      <div>
        <PaginationBtn
          allPageNumbers={allPageNumbers}
          paginate={paginate}
          curentPage={curentPage}
        />
      </div>
    </div>
  );
};
