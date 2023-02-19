import styled from 'styled-components';

const FooterComponent = styled.div`
  width: 100vw;
  height: 322px;
  font-size: 13px;
  color: var(--black-200);
  background-color: var(--black-800);

  h4 {
    cursor: pointer;
  }

  h5 {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 24px;
    cursor: pointer;
  }

  li {
    height: 25px;
    cursor: pointer;
    color: var(--black-350);
  }

  .footer_wrapper {
    width: 1264px;
    height: 322px;
    margin: 0 auto;
    padding: 32px 12px 12px;
    display: flex;
    justify-content: space-between;
  }
  .f_logo {
    width: 64px;
  }
  .f_list1 {
    width: 215px;
  }
  .f_list2 {
    width: 167px;
  }
  .f_list3 {
    width: 195px;
  }
  .f_list4 {
    width: 273px;
  }
  .f_list5 {
    width: 313px;
    font-size: 11px;
    ul {
      display: flex;
      flex-direction: row;
    }
    li {
      margin-right: 10px;
    }
  }
  .li_b_gap {
    margin-bottom: 16px;
  }
  p {
    margin-top: 185px;
    line-height: 15px;
    color: var(--black-350);
    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
function Footer() {
  return (
    <FooterComponent>
      <div className='footer_wrapper'>
        <div className='f_logo'>
          <h4>
            <svg
              aria-hidden='true'
              className='native svg-icon iconLogoGlyphMd'
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
          </h4>
        </div>
        <div className='f_list1'>
          <h5>STACK OVERFLOW</h5>
          <ul>
            <li>Questions</li>
            <li>Help</li>
          </ul>
        </div>
        <div className='f_list2'>
          <h5>PRODUCTS</h5>
          <ul>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </ul>
        </div>
        <div className='f_list3'>
          <h5>COMPANY</h5>
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
        </div>
        <div className='f_list4'>
          <h5>STACK EXCHANGE NETWORK</h5>
          <ul>
            <li>Techology</li>
            <li>Culture & recreation</li>
            <li>Life & arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li className='li_b_gap'>Business</li>
            <li>API</li>
            <li>Data</li>
          </ul>
        </div>
        <div className='f_list5'>
          <ul>
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
          <p>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under <span>CC BY-SA.</span> <br />
            rev 2023.2.16.43246
          </p>
        </div>
      </div>
    </FooterComponent>
  );
}

export default Footer;
