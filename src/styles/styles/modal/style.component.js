import styled from "styled-components";

export const FragmentThemeModal = styled.div`

    background: #00000059; 
    
    & > div{
        background: ${props => props.theme.main};   
    }

    & > div > p{
        color: ${props => props.theme.second};   
    }
`
