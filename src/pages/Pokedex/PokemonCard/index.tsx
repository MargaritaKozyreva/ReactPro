import React from 'react';
import Heading from '../../../components/Heading';
import style from './PokemonCard.module.scss';

import * as s from '../../../@types/store/structures';

const PokemonCard: React.FC<s.dataProps> = (props: s.dataProps): JSX.Element => {
  const { name_clean, stats, types, img } = props;

  return (
    <div className={style.root}>
      <div className={style.infoWrap}>
        <Heading type="h5" className={style.titleName}>
          {name_clean.toLowerCase()}
        </Heading>
        <div className={style.statWrap}>
          <div className={style.statItem}>
            <div className={style.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={style.statItem}>
            <div className={style.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={style.labelWrap}>
          {types.map((type) => (
            <span className={style.label}>{type}</span>
          ))}
        </div>
      </div>
      <div className={style.pictureWrap}>
        <img src={img} alt={name_clean} />
      </div>
    </div>
  );
};

PokemonCard.defaultProps = {};

export default PokemonCard;
