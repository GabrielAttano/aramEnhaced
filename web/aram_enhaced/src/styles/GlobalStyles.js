import styled, { createGlobalStyle } from 'styled-components';
import * as Colors from '../config/colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    html, body, #root {
    height: 100%;
    }

    button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

`;
