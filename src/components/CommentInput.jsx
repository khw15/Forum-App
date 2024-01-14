import React from 'react';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';
import useInput from '../hooks/useInput';

function CommentInput({onComment}) {
  const [content, setContent] = useInput('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) {
      // Show toast if comment field is empty
      toast.error('Comment field cannot be empty');
      return;
    }

    // Call the onComment callback with the content
    onComment(content);

    // Show toast if comment is posted
    toast.success('Comment posted');
  };

  return (
    <form className="flex flex-col gap-2">
      <textarea
        rows={4}
        // eslint-disable-next-line max-len
        className="w-full resize-none border-2 px-2 py-1 border-gray-500 rounded-md"
        value={content}
        onChange={setContent}
        required
      />
      <button
        type="submit"
        className="w-full bg-[#0891b2] text-white px-2 py-1 rounded-lg"
        onClick={handleCommentSubmit}
      >
        Post
      </button>
    </form>
  );
}

CommentInput.propTypes = {
  onComment: PropTypes.func.isRequired,
};

export default CommentInput;
