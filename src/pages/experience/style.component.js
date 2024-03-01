import styled from "styled-components";

export const FragmentTheme = styled.div`

    height: calc(100% - 100px);
    width: 100%;

    background: ${props => props.theme.main};

    & > div > div > div {
        background: ${props => props.theme.second};
    }

    .text{
        color: ${props => props.theme.second};
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

  @keyframes tilt-in-left-2 {
    0% {
      transform: rotateX(30deg) translateX(-300px) skewX(30deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  
  @keyframes tilt-in-right-2 {
    0% {
      transform: rotateX(30deg) translateX(300px) skewX(-30deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }
`

