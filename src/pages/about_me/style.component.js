import styled from "styled-components";

export const FragmentTheme = styled.div`

    height: calc(100% - 100px);
    width: 100%;

    background: ${props => props.theme.main};
    
    .text{
        color: ${props => props.theme.second}; 
    }
    
    .risk_about{
        background-color: ${props => props.theme.second};
    }

    .containerTec{
        background-color: #CF9C73;
        border-radius: 25px;
        box-shadow: 15px 12px 19px 5px rgba(185,139,111,0.75);
    }

    .button{
        background-color: white;
        color: ${props => props.theme.second};
        box-shadow: 15px 12px 19px 5px rgba(185,139,111,0.75);
    }

`