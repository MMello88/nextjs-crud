import { useState } from 'react';
import axios from '../src/apiAxios';
import { useRouter } from 'next/router';

export default function Signup() {
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '', password: '' });
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
      const response = await axios.post('/api/users/signup', user); // Substitua com a URL correta do seu backend
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" onChange={handleChange} placeholder="First name" />
        <input type="text" name="lastName" onChange={handleChange} placeholder="Last name" />
        <input type="email" name="email" onChange={handleChange} placeholder="E-mail" />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
