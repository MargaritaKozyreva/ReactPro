import React from 'react';
import Radium from 'radium';
import style from './Button.module.scss';

import ButtonsTheme from '../../ui/Buttons';

type ButtonProps = Props & HTMLAttributeProps;

interface Props {
  children?: React.ReactNode;
  design: 'primary' | 'success' | 'accent';
  size?: 'normal' | 'small';
  isAbsoluteWidth?: boolean;
}

interface HTMLAttributeProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const { children, design = 'primary', size = 'normal', isAbsoluteWidth = false, onClick } = props;

  const buttonWidth = isAbsoluteWidth ? ButtonsTheme.isAbsoluteWidth : null;
  const buttonStyle = { ...ButtonsTheme.design[design], ...ButtonsTheme.size[size], ...buttonWidth };

  return (
    <button type="button" className={style.root} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  design: 'primary',
  size: 'normal',
};

export default Radium(Button);
