import Image from 'next/image';
import onyx_logo from '../../../../public/images/onyx.png';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Location',
    links: ['Websites made', 'with ♥', 'in Detroit, MI'],
  },
  {
    title: 'Legal',
    links: ['Terms of use', 'Privacy policy', 'About us'],
  },
  {
    title: 'About us',
    links: ['Contact us', 'FAQ'],
  },
];

import {
  Wrapper,
  Inner,
  FooterMainContent,
  FooterMiddle,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterMainContent>
          <FooterMiddle>
              <Image src={onyx_logo} alt="onyx_logo" />
                <FooterNavigation>
                  <GridColumn>
                    <LinksContainer>
                    </LinksContainer>
                  </GridColumn>
              </FooterNavigation>
            </FooterMiddle>
            <FooterBottom>
                            <p>Websites made with ♥ in Detroit, MI </p>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              &nbsp; Onyx Digital, LLC.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
