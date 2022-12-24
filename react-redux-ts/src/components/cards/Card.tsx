import React, { FC } from 'react';
import map1 from '../../assets/map1.png';
import foto2 from '../../assets/foto2.png';
import play3 from '../../assets/play3.png';
import voise4 from '../../assets/voise4.png';
import map5 from '../../assets/map5.png';
import { IPropsCard } from '../../types/types';

export const Card: FC<IPropsCard> = ({ props }: IPropsCard) => {
  return (
    <div className="card" id={props.id}>
      <div className="card__image"></div>
      <div className="card__texts">
        <h5>{props.title}</h5>
        <p>
          <img src={map5} />
          {props.region}
        </p>
        <div className="card__links">
          <img src={map1} />
          <img src={foto2} />
          <img src={play3} />
          <img src={voise4} />
          <img src={map5} />
        </div>
      </div>
    </div>
  );
};
