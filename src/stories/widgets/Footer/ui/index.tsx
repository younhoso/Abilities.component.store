import clsx from 'clsx';

import { FooterStyled } from './styled';

const Footer = () => {
  return (
    <FooterStyled className={clsx('Footer')}>
      <div>
        <span>CreayerFix</span> / Company Profile
      </div>
      <div>Copyright © 2024 CreayerFix. All rights reserved.</div>
    </FooterStyled>
  );
};

export default Footer;
