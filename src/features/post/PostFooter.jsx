import React from 'react';
import PostAction from './PostAction';
import PostReaction from './PostReaction';

function PostFooter({ post, toggleLike }) {
  return (
    <>
      <PostReaction post={post} />
      <hr className="hr-sm my-0" />
      <PostAction post={post} toggleLike={toggleLike} />
    </>
  );
}

export default PostFooter;
