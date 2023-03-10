import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }: any) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }: any) => theme.font.family.secondary};
    margin: ${({ theme }: any) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }: any) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }: any) => theme.spacings.medium};
    padding: ${({ theme }: any) => theme.spacings.medium};
  }

  a {
    color: ${({ theme }: any) => theme.colors.secondaryColor};
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
