import * as React from "react";
import "./App.css";
import styled from "styled-components";

const Link = styled.a`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: rgb(25, 118, 210);
  font-size: 14px;
  padding: 10px;
  border-right: 1px solid rgb(25, 118, 210);
  display: inline;
  &:hover {
    background-color: rgba(25, 118, 210, 0.04);
  }
  &:last-child {
    border-right: 0px;
  }
`;

const FooterGrid = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 22px 15px 25px 22px;
  text-align: right;
  background-color: #bdbdbd;
`;

const Footer: React.FC = () => {
  return (
    <FooterGrid>
      <Link target="_blank" href="#">
        TWITTER
      </Link>
      <Link href="#">FACEBOOK</Link>
    </FooterGrid>
  );
};

export default Footer;
