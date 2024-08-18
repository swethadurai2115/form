import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0'
  },
  form: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  inputGroup: {
    marginBottom:'1rem'
  },
  error: {
    color: 'red'
  }
};

export default LoginForm;
