import * as React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #ebeced;
  padding: 8px 13px;
  border-radius: 30px;
  color: black;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  transition: all 200ms ease;
  border: none;
`;
const StockBtn: React.FC = () => {
  return <Btn>in stock</Btn>;
};
export default StockBtn;
