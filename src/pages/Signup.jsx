import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(user.accessToken));
      navigate('/');

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit} className='signup-form'>
        <input
          type='email'
          placeholder='Your Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Your Password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='signup-button'>Signup</button>
      </form>
      <p>Need to login? <Link to='/login'>Login</Link></p>
    </div>
  )
}

export default Signup