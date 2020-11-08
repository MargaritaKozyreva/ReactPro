import React from 'react';

import HeadingTheme from '../../ui/Heading';

type HeadingProps = Props & HTMLAttributeProps;

interface Props {
  [key: string]: any;
  children?: React.ReactNode;
  type?: 'h4' | 'h3' | 'h2' | 'h1';
  size?: 'normal' | 'small';
  design?: 'primary' | 'default';
  uppercase?: boolean;
}

interface HTMLAttributeProps {
  [key: string]: any;
}

const Heading: React.FC<HeadingProps> = (props): JSX.Element => {
  const { children, type, design = 'primary', size = 'normal', ...attrs } = props;

  const headingStyle = { ...HeadingTheme.design[design], ...HeadingTheme.size[size] };

  return (
    <h1 style={headingStyle} {...attrs}>
      {children}
    </h1>
  );
};

Heading.defaultProps = {
  type: 'h1',
  uppercase: true,
  design: 'primary',
};

Heading.displayName = 'Heading';
export default Heading;
