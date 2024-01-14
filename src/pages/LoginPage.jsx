/* eslint-disable max-len */
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import LoginInput from '../components/LoginInput';
import {asyncSetAuthUser} from '../states/authUser/action';
import {toast} from 'react-toastify';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({email, password}) => {
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    dispatch(asyncSetAuthUser({email, password}));
    navigate('/');
  };

  return (
    <section>
      <h1 className="textSlate700 text-2xl font-semibold mb-5 text-center">Login</h1>
      <LoginInput login={onLogin} />
      <p className="textSlate700 text-md mt-4">
        Don&apos;t have an account yet?
        {' '}
        <Link
          to="/register"
          className="underline"
        >
          Register here
        </Link>
      </p>
    </section>
  );
}

export default LoginPage;
