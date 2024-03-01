import styled from "styled-components";

export const FragmentTheme = styled.main`

    background: ${props => props.theme.main};

    > section > div > h1{
        color: ${props => props.theme.second};
    }

    > section > div > h2{
        color: ${props => props.theme.second};
    }
    
    .exitSection-On{
        animation: fade-out 0.4s ease-in-out both;
    }

    .exitImage-On{
        animation: fade-out 0.4s ease-in-out both;
    }

    .exitNav-On{
        animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) 0.5s both;
    }

    

    @keyframes slide-in-blurred-top {
    0% {
      transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      transform-origin: 50% 0%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  }

    
    @keyframes slide-out-blurred-top {
  0% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 0%;
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) scaleY(2) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
}

@keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  


`

