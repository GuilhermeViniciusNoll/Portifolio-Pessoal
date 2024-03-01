import styled from "styled-components";

export const FragmentTheme_Header = styled.header`

    background: ${props => props.theme.main};
    border-bottom: 3.5px solid ${props => props.theme.second};

   > div{
    background: ${props => props.theme.main};
   }

   > div > div > h1{
    color: ${props => props.theme.second};
   }

   > div > div > span{
    color: ${props => props.theme.second};
   }
 
`