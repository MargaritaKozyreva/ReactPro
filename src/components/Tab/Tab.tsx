import React from 'react';
import * as struct from '../../@types/store/structures';
import style from './Tab.module.scss';

const Tab: React.FC<struct.TabProps> = (props: struct.TabProps): JSX.Element => {
  const { value, link, activePage } = props;
  const linkStyle = activePage === value ? `${style.menuLink} ${style.activeLink}` : style.menuLink;

  return (
    <a href={link} className={linkStyle}>
      {value}
    </a>
  );
};

export default Tab;
