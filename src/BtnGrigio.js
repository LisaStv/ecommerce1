import * as React from 'react';
import Stack from '@mui/material/Stack';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';

const CustomButtonRoot = styled('button')(`
  background-color: #ebeced;
  padding: 10px 15px;
  border-radius: 30px;
  color: black;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  transition: all 200ms ease;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export default function BtnGrigio() {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton>In stock</CustomButton>
    </Stack>
  );
}