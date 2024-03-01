import styled from "styled-components";

export const FragmentTheme = styled.nav`

    background: ${props => props.theme.second};

    > .clip {
        background: ${props => props.theme.main};
    }
`