import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

interface Props {
  value: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props): JSX.Element => {
  const { value, handleOnChange } = props;
  return (
    <div className={style.root}>
      <input type="text" value={value} onChange={handleOnChange} />
    </div>
  );
};

export default Input;
