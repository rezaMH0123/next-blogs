import React from "react";
import SingleComments from "./SingleComments";

const ReplyComments = ({ comments, parentCommentId, postId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="mr-2 md:mr-5" key={comment._id}>
          <React.Fragment key={comment._id}>
            <SingleComments comment={comment} postId={postId} />
            <ReplyComments
              comments={comments}
              parentCommentId={comment._id}
              postId={postId}
            />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComments;
