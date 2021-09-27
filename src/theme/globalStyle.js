import { createGlobalStyle } from 'styled-components';
import * as colors from './colors';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: ${colors.lightBackground};
  }
`;
