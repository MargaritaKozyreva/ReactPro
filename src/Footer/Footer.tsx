import React from 'react';
import struct from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={struct.footer}>
      <div>
        <p>
          Make with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </p>
      </div>
      <div>
        <p>Ours Team</p>
      </div>
    </div>
  );
};

export default Footer;
