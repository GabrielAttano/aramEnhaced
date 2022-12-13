import styled, { css } from "styled-components";
import * as Colors from "../../config/colors";

export const Container = styled.div`
    background-color: ${props => props.isDarkTheme ? Colors.black : Colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    padding: 60px 32px;
    gap: 32px;
    width: auto;
    
    max-height: 700px;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
    ${props => props.hide && css`
        max-height: 80px;
        transition: max-height 0.25s ease-in;
    `};
    
`;

export const body = styled.div`
    background-color: ${Colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: auto;
    height: 200px;
`;

export const inputContainer = styled.div`
    width: 90%;

    input[type="text"] {
        width: 85%;
        height: 60px;
        font-size: 24px;
        color: ${Colors.secondaryColor};
        padding-left: 12px;
        padding-right: 50px;
        vertical-align: middle;
        border-radius: 5px;
    }
`;

export const Button = styled.button`
    background-color: ${Colors.PrimaryButtonColor};
    color: ${Colors.primaryColor};
    height: 55px;
    width: 15%;
    font-size: 16px;
    vertical-align: middle;
`;

export const H1 = styled.h1`
    color: ${props => props.isDarkTheme ? Colors.primaryColor : Colors.secondaryColor};
    font-size: 40px;
    font-weight: bolder;
    text-align: center;
`;

export const TeamContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    background-color: ${props => props.bgColor};
    width: 50%;
    padding: 16px;
    gap: 4px;
`;

export const SecondaryContainer = styled.div`
    display: ${props => props.showContainer ? "flex" : "none"};
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    align-content: center;
    height: auto;
`;