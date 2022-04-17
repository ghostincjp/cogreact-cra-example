import {
  CompleteNewPasswordRoute,
  PrivateRoute,
  SignInRoute,
  useAuthStatus,
  useSignIn,
  useSignOut,
} from 'cogreact';
import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const authState = useAuthStatus();
  const location = useLocation();

  const { signIn, loading, error } = useSignIn();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    signIn({ email, password });
  };

  const { signOut } = useSignOut();

  const handleClickSignOut = () => {
    signOut();
  };

  return (
    <div className="App">
      <h1>Routes</h1>
      <p>AuthStatus: {authState.authStatus}</p>
      <p>Pathname: {location.pathname}</p>
      <p>
        Location State: {(location.state as { from?: string })?.from as string}
      </p>

      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="private1">Private 1</Link>
        </li>
        <li>
          <Link to="private2">Private 2</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="login">Complete New Password</Link>
        </li>
        <li>
          <button onClick={handleClickSignOut}>Sign out</button>
        </li>
      </ul>

      <div>
        <h2>Sign in</h2>

        <div>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button onClick={handleClick}>Sign In</button>
        </div>
      </div>

      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<>Index</>} />
          <Route path="private1" element={<>Private 1</>} />
          <Route path="private2" element={<>Private 2</>} />
        </Route>

        <Route element={<SignInRoute />}>
          <Route path="login" element={<>Login</>} />
        </Route>

        <Route element={<CompleteNewPasswordRoute />}>
          <Route
            path="complete-new-password"
            element={<>Complete New Password</>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
