import { useState } from 'react';
import axios from '../src/apiAxios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/signin', user); // Substitua com a URL correta do seu backend
      Cookies.set('token', response.data.token);
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleChange} placeholder="E-mail" />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}