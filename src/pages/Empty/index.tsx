import React from 'react';
import Button from '../../components/Button';
import style from './EmptyPage.module.scss';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';
import Content from '../../components/Content';
import Text from '../../components/Text';

interface Props {
  title?: string;
}

const EmptyPage: React.FC<Props> = ({ title }): JSX.Element => {
  return (
    <div className={style.root}>
      <Content>
        <Text type="p" size="xl" design="default" position="center">
          Page not found {title}
        </Text>
        <Button design="accent" size="m" onClick={() => navigate(LinkEnum.HOME)}>
          Return
        </Button>
      </Content>
    </div>
  );
};

EmptyPage.defaultProps = {
  title: ':(',
};

export default EmptyPage;
