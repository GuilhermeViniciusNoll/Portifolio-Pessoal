import styled from "styled-components";

export const FragmentTheme = styled.div`

& > div{
    background: ${props => props.theme.main};
    
     p, span, h1{
        color: ${props => props.theme.second};
    }
}

.containerColor{
    background-color: ${props => props.theme.second};
    border-radius: 22px;
    display: flex;
    width: 65px;
    height: 55px;
    padding: 5px;
    align-content: center;
    justify-content: center;  
}
`

