import styled from "styled-components";
import * as Colors from "../../config/colors"

export const ChampionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    background-color: ${Colors.gray};
    padding: 8px;
    border-radius: 4px;
    width: 100%;
    height: 130px;
`;

export const ChampionInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 8px;
`;

export const ChampionTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    padding-left: 12px;
`;

export const ChampionChangesContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    gap: 4px;
`;

export const ChampionChanges = styled.div`
    background-color: ${props => props.bg_color};
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    border-radius: 4px;
    padding: 2px 4px;
`;

export const ChampionName = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    width: 100%;
    color: ${Colors.secondaryColor};
    font-weight: bold;
    font-size: 32px;
`;

export const ChampionTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    width: 100%;
    color: ${Colors.darkGray};
    font-size: 20px;
`;
