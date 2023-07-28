import { useEffect, useState } from 'react';
import axios from '../src/apiAxios';
import Cookies from 'js-cookie';

export default function Dashboard() {
  const [user, setUser] = useState(null);

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
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {user.firstName} {user.lastName}</h2>
    </div>
  );
}
