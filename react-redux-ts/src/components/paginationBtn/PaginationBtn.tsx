import { FC, useState } from 'react';

interface Inum {
  allPageNumbers: number;
  paginate: (
    pageNumber: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    btnChilde: ChildNode | null | undefined
  ) => void;
  curentPage: string;
}

export const PaginationBtn: FC<Inum> = ({ allPageNumbers, paginate, curentPage }: Inum) => {
  const [disBtnLeft, setDisBtnLeft] = useState(true);
  const [disBtnRight, setDisBtnRight] = useState(false);
  const pages: number[] = [];

  for (let i = 0; i < allPageNumbers; i++) {
    pages.push(i);
  }

  const handlePagination = (
    num: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    btnChilde: ChildNode | null | undefined
  ) => {
    paginate(num, e, btnChilde);
    if (num + 1 === allPageNumbers) {
      setDisBtnRight(true);
      setDisBtnLeft(false);
    }
    if (num + 1 === 1) {
      setDisBtnRight(false);
      setDisBtnLeft(true);
    }
    if (num + 1 !== allPageNumbers) {
      setDisBtnRight(false);
    }
    if (num + 1 !== 1) {
      setDisBtnLeft(false);
    }
  };

  const handleClickRight = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const elem = e.target as HTMLButtonElement;
    let previousSiblingEl: ChildNode | null | undefined = elem.previousSibling;
    if (previousSiblingEl === null) {
      previousSiblingEl = elem.parentNode?.previousSibling
        ? elem.parentNode?.previousSibling
        : elem.parentNode?.parentNode?.previousSibling;
    }
    if (!previousSiblingEl) return;

    const leftBtn = previousSiblingEl.previousSibling as HTMLButtonElement;
    if (Number(curentPage) === 1) {
      leftBtn.disabled = false;
      setDisBtnLeft(false);
    }
    if (Number(curentPage) === allPageNumbers - 1) {
      elem.disabled = true;
      setDisBtnRight(true);
    }
    handlePagination(Number(curentPage), null, previousSiblingEl);
  };

  const handleClickLeft = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const elem = e.target as HTMLButtonElement;
    let nextSiblingEl: ChildNode | null | undefined = elem.nextSibling;
    if (nextSiblingEl === null) {
      nextSiblingEl = elem.parentNode?.nextSibling
        ? elem.parentNode?.nextSibling
        : elem.parentNode?.parentNode?.nextSibling;
    }
    if (!nextSiblingEl) return;

    const rightBtn = nextSiblingEl.nextSibling as HTMLButtonElement;
    if (Number(curentPage) === allPageNumbers) {
      rightBtn.disabled = false;
      setDisBtnRight(false);
    }

    if (Number(curentPage) === 2) {
      elem.disabled = true;
      setDisBtnLeft(true);
    }
    handlePagination(Number(curentPage) - 2, null, nextSiblingEl);
  };

  return (
    <div className="buttons">
      <button className="arrow arrow-left" onClick={(e) => handleClickLeft(e)}>
        {disBtnLeft && <input type="button" disabled={true} className="disabled-btn"></input>}
        <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.55505 0.727097L6.0267 1.07494L6.0267 10.5029L5.57189 10.8339L0.973282 6.09467L0.973282 5.39814L5.55505 0.727097Z" />
        </svg>
      </button>
      <div className="pagination">
        {pages.map((num: number) => {
          if (num === 0) {
            return (
              <button key={num} className="active" onClick={(e) => handlePagination(num, e, null)}>
                {num + 1}
              </button>
            );
          } else {
            return (
              <button key={num} onClick={(e) => handlePagination(num, e, null)}>
                {num + 1}
              </button>
            );
          }
        })}
      </div>
      <button className="arrow arrow-right" onClick={(e) => handleClickRight(e)}>
        {disBtnRight && <input type="button" disabled={true} className="disabled-btn"></input>}
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.44492 10.8339L0.973267 10.4861L0.973266 1.0581L1.42807 0.727097L6.02669 5.46636L6.02669 6.16289L1.44492 10.8339Z" />
        </svg>
      </button>
    </div>
  );
};
