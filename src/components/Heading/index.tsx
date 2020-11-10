import React from 'react';

import { HeadingTheme } from '../../ui/Typography';

type HeadingProps = Props & HTMLAttributeProps;

interface Props {
  [key: string]: any;
  children?: React.ReactNode;
  type?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
  design?: 'primary' | 'default';
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none' | 'inherit';
}

interface HTMLAttributeProps {
  [key: string]: any;
}

const Heading: React.FC<HeadingProps> = (props): JSX.Element => {
  const { children, design = 'default', type = 'h3', textTransform = 'none', ...attrs } = props;
  const headingStyle = {
    ...HeadingTheme.design[design],
    ...HeadingTheme.type[type],
    textTransform: props.textTransform,
  };

  const H: React.FC<HeadingProps> = ({ children, ...props }) => {
    return React.createElement(`${type}`, props, children);
  };

  return (
    <H style={headingStyle} {...attrs}>
      {children}
    </H>
  );
};

export default Heading;
