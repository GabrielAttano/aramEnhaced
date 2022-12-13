import styled from "styled-components";
import * as Colors from "../../config/colors"

export const Container = styled.div`
    background-color: ${Colors.primaryColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: auto;
    padding: 24px 64px;
`;

export const Element = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
`;

export const H2 = styled.h2`
    font-size: 36px;
    font-weight: bold;
    color: ${Colors.secondaryColor};
`;
