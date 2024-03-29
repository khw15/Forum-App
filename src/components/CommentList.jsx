import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import {commentProp, userProp} from '../utils/propsHelper';

function CommentList({comments, authUser}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">
        {`${comments.length}`}
        {' '}
        comments
      </h2>
      <div className="flex flex-col gap-5">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            id={comment.id}
            owner={comment.owner}
            createdAt={comment.createdAt}
            content={comment.content}
            upVotesBy={comment.upVotesBy}
            downVotesBy={comment.downVotesBy}
            authUser={authUser}
          />
        ))}
      </div>
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentProp)).isRequired,
  authUser: PropTypes.shape(userProp).isRequired,
};

export default CommentList;
