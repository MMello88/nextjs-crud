import { useState } from 'react';
import { ThemeContext } from '../src/contexts/ThemeContext';
import Layout from '../src/components/Layout';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}

