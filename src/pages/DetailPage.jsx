import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import ThreadDetail from '../components/ThreadDetail';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
} from '../states/threadDetail/action';

function DetailPage({authUser}) {
  const {id} = useParams();
  const {threadDetail} = useSelector((states) => states);
  const dispatch = useDispatch();

  const onComment = (content) => {
    if (content.trim() !== '') {
      dispatch(asyncAddComment(id, content.trim()));
    }
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  return (
    <div className="flex flex-col gap-5">
      <ThreadDetail
        id={threadDetail.id}
        title={threadDetail.title}
        body={threadDetail.body}
        category={threadDetail.category}
        upVotesBy={threadDetail.upVotesBy}
        downVotesBy={threadDetail.downVotesBy}
        user={threadDetail.owner}
        createdAt={threadDetail.createdAt}
        authUser={authUser}
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Post a Comment</h2>
          {authUser ? (
            <CommentInput onComment={onComment} />
          ) : (
            <p>
              <Link to="/login" className="underline">
                Login
              </Link>
              {' '}
              to post a comment
            </p>
          )}
        </div>
        <div>
          {authUser ? (
            <CommentList comments={threadDetail.comments} authUser={authUser} />
          ) : (
            <h3 className="text-xl font-semibold">0 comment</h3>
          )}
        </div>
      </div>
    </div>
  );
}

const authUserShape = {
  token: PropTypes.string,
};

DetailPage.propTypes = {
  authUser: PropTypes.shape(authUserShape),
};

DetailPage.defaultProps = {
  authUser: null,
};

export default DetailPage;
