import React from 'react';
import Button from '../../components/Button';
import style from './EmptyPage.module.scss';
import { navigate } from 'hookrouter';

interface Props {
  title?: string;
}

const EmptyPage: React.FC<Props> = ({ title }): JSX.Element => {
  return (
    <div className={style.root}>
      <Button design="accent" size="m" onClick={() => navigate('./home')}>
        Return
      </Button>
    </div>
  );
};

EmptyPage.defaultProps = {
  title: 'Empty title',
};

export default EmptyPage;
