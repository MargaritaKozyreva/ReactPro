import React from 'react';
import * as struct from '../@types/store/structures';
import style from './Tab.module.scss';

const Tab: React.FC<struct.TabProps> = (props: struct.TabProps): JSX.Element => {
  const { title, isActive } = props;

  return (
    <div className={isActive ? `${style.tab} ${style.active}` : style.tab}>
      <p>{title}</p>
    </div>
  );
};

export default Tab;
