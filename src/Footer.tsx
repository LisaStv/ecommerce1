import * as React from "react";
import "./App.css";
import styled from 'styled-components';

const Link = styled.a``

const FooterGrid = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  text-align: right;
  background-color: #bdbdbd;
`

const Footer: React.FC = () => {
  return (
    <FooterGrid>
      <Link target="_blank" href="#">
        TWITTER
      </Link>{" "}
      |<Link href="#">FACEBOOK</Link>
    </FooterGrid>
  );
};

export default Footer;
