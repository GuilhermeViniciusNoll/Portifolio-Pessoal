import styled from "styled-components";

export const FragmentTheme = styled.div`

    height: calc(100% - 100px);
    width: 100%;

    background: ${props => props.theme.main};

    .item{
        background-color: #CF9C73;
        border-radius: 25px;
        box-shadow: 15px 12px 19px 5px rgba(185,139,111,0.75);
    }

    .item>img{
        border: ${props => props.theme.second} solid 3px;
    }

    .item>nav>a{
      color: ${props => props.theme.main};
      background-color: ${props => props.theme.second};
    }

    .button{
        background-color: white;
        color: ${props => props.theme.second};
        box-shadow: ${props => props.theme.main};
        box-shadow: 15px 12px 19px 5px rgba(185,139,111,0.75);
    }
`

