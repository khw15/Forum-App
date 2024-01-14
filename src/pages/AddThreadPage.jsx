import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import {asyncAddThread} from '../states/threads/action';
import {toast} from 'react-toastify';

function AddThreadPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCreate = ({title, category, body}) => {
    if (title && category && body) {
      dispatch(asyncAddThread({title, category, body}));
      navigate('/');
      toast.success('Thread created');
    } else {
      toast.error('Please fill in all fields');
    }
  };

  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">Create a New Discussion</h2>
      <ThreadInput onCreate={onCreate} />
    </section>
  );
}

export default AddThreadPage;
