import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterComponent = styled.div`
  width: 100vw;
  height: 322px;
  font-size: 13px;
  color: var(--black-200);
  background-color: var(--black-800);

  li {
    height: 25px;
    cursor: pointer;
    color: var(--black-350);
    :hover {
      color: var(--black-300);
    }
  }
`;

const FooterH4 = styled.h4`
  cursor: pointer;
`;

const FooterH5 = styled.h5`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 24px;
  cursor: pointer;
`;

const FooterWrapper = styled.div`
  width: 1264px;
  height: 322px;
  margin: 0 auto;
  padding: 32px 12px 12px;
  display: flex;
  justify-content: space-between;
`;

const FooterLogo = styled.div`
  width: 64px;
`;
const FooterList1 = styled.div`
  width: 215px;
`;
const FooterList2 = styled.div`
  width: 167px;
`;
const FooterList3 = styled.div`
  width: 195px;
`;
const FooterList4 = styled.div`
  width: 273px;

  li:nth-child(6) {
    margin-bottom: 14px;
  }
`;

const FooterList5 = styled.div`
  width: 313px;
  font-size: 11px;
`;

const FooterList5Li = styled.li`
  margin-right: 10px;
`;

const FooterList5Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Copyright = styled.p`
  margin-top: 185px;
  line-height: 15px;
  color: var(--black-350);
`;

const CopyrightSpan = styled.span`
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: var(--black-300);
  }
`;

function Footer() {
  return (
    <footer>
      <FooterComponent>
        <FooterWrapper>
          <FooterLogo>
            <Link to='/'>
              <FooterH4>
                <svg
                  aria-hidden='true'
                  width='32'
                  height='37'
                  viewBox='0 0 32 37'
                >
                  <path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB'></path>
                  <path
                    d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
                    fill='#F48024'
                  ></path>
                </svg>
              </FooterH4>
            </Link>
          </FooterLogo>
          <FooterList1>
            <FooterH5>STACK OVERFLOW</FooterH5>
            <ul>
              <li>Questions</li>
              <li>Help</li>
            </ul>
          </FooterList1>
          <FooterList2>
            <FooterH5>PRODUCTS</FooterH5>
            <ul>
              <li>Teams</li>
              <li>Advertising</li>
              <li>Collectives</li>
              <li>Talent</li>
            </ul>
          </FooterList2>
          <FooterList3>
            <FooterH5>COMPANY</FooterH5>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Work Here</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
              <li>Cookie Settings</li>
              <li>Cookie Policy</li>
            </ul>
          </FooterList3>
          <FooterList4>
            <FooterH5>STACK EXCHANGE NETWORK</FooterH5>
            <ul>
              <li>Techology</li>
              <li>Culture & recreation</li>
              <li>Life & arts</li>
              <li>Science</li>
              <li>Professional</li>
              <li>Business</li>
              <li>API</li>
              <li>Data</li>
            </ul>
          </FooterList4>
          <FooterList5>
            <FooterList5Ul>
              <FooterList5Li>Blog</FooterList5Li>
              <FooterList5Li>Facebook</FooterList5Li>
              <FooterList5Li>Twitter</FooterList5Li>
              <FooterList5Li>LinkedIn</FooterList5Li>
              <FooterList5Li>Instagram</FooterList5Li>
            </FooterList5Ul>
            <Copyright>
              Site design / logo © 2023 Stack Exchange Inc; user contributions
              licensed under <CopyrightSpan>CC BY-SA.</CopyrightSpan> <br />
              rev 2023.2.16.43246
            </Copyright>
          </FooterList5>
        </FooterWrapper>
      </FooterComponent>
    </footer>
  );
}

export default Footer;
