import React from 'react';
import { A } from 'hookrouter';
import style from './Tab.module.scss';
import { IGeneralMenu } from '../../routes';
import { usePath } from 'hookrouter';


const Tab: React.FC<IGeneralMenu> = (props): JSX.Element => {
  const path = usePath();
  
  const { title, link } = props;
  const linkStyle = path === link ? `${style.menuLink} ${style.activeLink}` : style.menuLink;

  return (
    <A href={link} className={linkStyle}>
      {title}
    </A>
  );
};

export default Tab;
