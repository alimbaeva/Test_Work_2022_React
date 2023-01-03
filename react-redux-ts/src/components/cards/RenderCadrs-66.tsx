import React, { FC, useState } from 'react';
// import { cardData } from '../../data/cardData';
// import { Card } from './Card';
// import { ICard } from '../../types/types';
// import { PaginationBtn } from '../paginationBtn/PaginationBtn';
// import arrow_left from '../../assets/arrow_left.svg';
// import arrow_right from '../../assets/arrow_right.svg';
// import './style/card.scss';

// export const RenderCadrs: FC = () => {
//   const [cards, useCards] = useState<ICard[]>(cardData.slice(0, 12));
//   const [page, usePage] = useState<string>('1');

//   const onPageCards = 12;
//   // let page = '1';
//   const paginationPages = Math.ceil(cardData.length / onPageCards);

//   const HandleClickRight = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     if (page !== String(paginationPages)) {
//       // eslint-disable-next-line react-hooks/rules-of-hooks
//       usePage(String(Number(page) + 1));
//       console.log(page);
//       if (page === String(paginationPages)) {
//         const btn = e.target as HTMLButtonElement;
//         btn.classList.add('disabled');
//         console.log(page);
//       }
//     }
//   };

//   const HandleClickPadination = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const nodesBun = e.currentTarget.childNodes;
//     nodesBun.forEach((el: ChildNode) => {
//       const btn = el as HTMLButtonElement;
//       btn.classList.remove('active');
//     });

//     const btn = e.target as HTMLButtonElement;
//     const curPage = btn.textContent ? btn.textContent : '1';
//     usePage(curPage);

//     btn.classList.add('active');
//     const start = (Number(page) - 1) * onPageCards;
//     const end = start + onPageCards;
//     useCards(cardData.slice(start, end));
//   };

//   const renderCards = () => {
//     return cards.map((el) => {
//       return <Card key={el.id} props={el} />;
//     });
//   };

//   const renderBtn = () => {
//     const arrPages = [];
//     for (let i = 0; i < paginationPages; i++) {
//       arrPages.push(i);
//     }
//     return arrPages.map((el, indx) => {
//       return <PaginationBtn key={indx} props={el + 1} />;
//     });
//   };

//   return (
//     <div className="container">
//       <div className="cards-block">{renderCards()}</div>
//       <div className="pagination" onClick={(e) => HandleClickPadination(e)}>
//         <button className="arrow disabled">
//           <img src={arrow_left} />
//         </button>
//         <div onClick={(e) => HandleClickPadination(e)}>{renderBtn()}</div>
//         <button className="arrow" onClick={(e) => HandleClickRight(e)}>
//           <img src={arrow_right} />
//         </button>
//       </div>
//     </div>
//   );
// };
