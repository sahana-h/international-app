// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert('Signup successful!');
      onLogin();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert('Login successful!');
      onLogin();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    alert('Logged out!');
  };

  return (
    <div>
      <h2>Login / Sign Up</h2>
      {!user ? (
        <>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <button onClick={handleLogin}>Log In</button>
          <button onClick={handleSignup}>Sign Up</button>
        </>
      ) : (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Log Out</button>
        </>
      )}
    </div>
  );
}

export default Login;
