import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../src/contexts/ThemeContext';
import axios from '../src/apiAxios';
import Cookies from 'js-cookie';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = Cookies.get('token');
         
        const response = await axios.get('/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }); // Substitua com a URL correta do seu backend
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className={`container${theme === 'dark' ? ' dark' : ''}`}>
      <h1>Dashboard</h1>
      <div>
        <label className="form-check-label">
          Light
          <input
            type="radio"
            value="light"
            checked={theme === 'light'}
            onChange={toggleTheme}
            className="form-check-input"
          />
        </label>
        <label className="form-check-label">
          Dark
          <input
            type="radio"
            value="dark"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            className="form-check-input"
          />
        </label>
      </div>
      <h2>Welcome, {user.firstName} {user.lastName}</h2>
    </div>

    
  );
}
