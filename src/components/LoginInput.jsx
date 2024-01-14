import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({login}) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const handleLogin = (e) => {
    e.preventDefault();
    login({email, password});
  };

  return (
    <form className="flex flex-col w-full gap-3">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
        className="border-2 border-gray-400 rounded-md p-1"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={setPassword}
        className="border-2 border-gray-400 rounded-md p-1"
        required
      />
      <button
        type="submit"
        onClick={handleLogin}
        className="bg-cyan-600 p-1 rounded-md text-white"
      >
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
