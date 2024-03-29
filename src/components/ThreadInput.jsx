import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({onCreate}) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <form className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        className="w-full border-2 px-2 py-1 border-gray-600 rounded-md"
        value={title}
        onChange={onTitleChange}
        required
      />
      <input
        type="text"
        placeholder="Category"
        className="w-full border-2 px-2 py-1 border-gray-600 rounded-md"
        value={category}
        onChange={onCategoryChange}
        required
      />
      <textarea
        rows={4}
        // eslint-disable-next-line max-len
        className="w-full resize-none border-2 px-2 py-1 border-gray-600 rounded-md"
        value={body}
        onChange={onBodyChange}
        required
      />
      <button
        type="submit"
        className="w-full bg-[#0891b2] text-white p-2 rounded-lg"
        onClick={() => onCreate({title, category, body})}
      >
        Post Thread
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default ThreadInput;
