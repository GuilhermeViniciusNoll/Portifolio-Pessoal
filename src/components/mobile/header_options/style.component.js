import styled from "styled-components";

export const FragmentTheme = styled.div`

    border: 5px solid ${props => props.theme.second};

    .risk{
        background: ${props => props.theme.second};
    }
`

