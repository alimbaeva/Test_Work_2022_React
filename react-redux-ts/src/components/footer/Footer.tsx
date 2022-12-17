import React, { FC } from 'react';
import Frame from '../../assets/Frame.png';
import image from '../../assets/image.png';
import './footer.scss';

export const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__title">
            <img src={Frame} />
            <p>Государственный Российский Дом народного творчества имени В.Д. Поленова</p>
          </div>
          <div className="footer__contact">
            <p>Контакты</p>
            <div>
              <p>Москва, Сверчков пер., 8, стр. 3.</p>
              <p>Тел.: +7 495 628-40-87</p>
            </div>
          </div>
          <div>
            <img src={image} />
          </div>
        </div>
      </div>
    </footer>
  );
};
