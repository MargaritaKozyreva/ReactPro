import React from 'react';

import { ParagraphTheme } from '../../ui/Typography';

type TextProps = Props & HTMLAttributeProps;

interface Props {
  [key: string]: any;
  children?: React.ReactNode;
  type?: 'p' | 'span';
  size?: 'm' | 'l' | 'xl' | 'xxl';
  design?: 'primary' | 'default';
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none' | 'inherit';
}

interface HTMLAttributeProps {
  [key: string]: any;
}

const Text: React.FC<TextProps> = (props): JSX.Element => {
  const { children, design = 'default', type = 'p', size = 'm', textTransform = 'none', ...attrs } = props;
  const TextStyle = {
    ...ParagraphTheme.design[design],
    ...ParagraphTheme.size[size],
    textTransform: props.textTransform
  };

  const T: React.FC<TextProps> = ({ children, ...props }) => {
    return React.createElement(`${type}`, props, children);
  };

  return (
    <T style={TextStyle} {...attrs}>
      {children}
    </T>
  );
};

export default Text;
