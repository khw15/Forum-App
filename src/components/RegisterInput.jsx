import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({register}) {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const handleRegister = (e) => {
    e.preventDefault();
    register({name, email, password});
  };

  return (
    <form className="flex flex-col w-full gap-3">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={setName}
        className="border-2 border-gray-400 rounded-md p-1"
        required
      />
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
        onClick={handleRegister}
        className="bg-cyan-600 p-1 rounded-md text-white"
      >
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
