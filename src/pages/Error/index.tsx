import React from 'react';
import Text from '../../components/Text';
import style from './Error.module.scss';
import Button from '../../components/Button';

import { ReactComponent as TeamRocket } from './assets/teamRocket.svg';

interface Props {}

const ErrorPage: React.FC<Props> = (): JSX.Element => {
  return (
    <div className={style.root}>
      <div className={style.wrapContent}>
        <div className={style.errorLabel}>404</div>
        <div className={style.wrapMainContent}>
          <TeamRocket className={style.teamRocket} />

          <div className={style.wrapMainText}>
            <Text type="span" size="l" design="primary">
              The rocket team
            </Text>{' '}
            <Text type="span" size="l" design="default">
              has won this time.
            </Text>
          </div>
          <div className={style.wrapButton}>
            <Button design="primary">Return</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ErrorPage.defaultProps = {};

export default ErrorPage;
