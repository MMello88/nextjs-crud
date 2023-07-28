import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const lightTheme = {
  background: '#fff',
  color: '#000'
};

const darkTheme = {
  background: '#000',
  color: '#fff'
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }
`;

const Header = styled.header`
  /* Adicione seus estilos aqui */
`;

const Footer = styled.footer`
  /* Adicione seus estilos aqui */
`;

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <Header>
        <h1>My App</h1>
        {/* Adicione mais elementos de cabeçalho aqui, se necessário */}
      </Header>
      <main>{children}</main>
      <Footer>
        {/* Adicione elementos de rodapé aqui, se necessário */}
      </Footer>
    </ThemeProvider>
  );
}
