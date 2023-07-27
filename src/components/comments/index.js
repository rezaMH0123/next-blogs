import React, { useState } from "react";
import CommetForm from "./commetForm";
import ReplyComments from "./ReplyComments";
import SingleComments from "./SingleComments";
const PostComments = ({ post }) => {
  return (
    <div>
      <h2 className="text-2xl mb-4">نظرات</h2>
      {post.comments.map((comment) => {
        return (
          !comment.responseTo &&
          comment.status == 2 && (
            <React.Fragment key={comment._id}>
              <SingleComments comment={comment} postId={post._id} />
              <ReplyComments
                comments={post.comments}
                parentCommentId={comment._id}
                postId={post._id}
              />
            </React.Fragment>
          )
        );
      })}
      <span className=" block font-vazir text-xl font-bold mt-6 mb-4">
        ارسال دیدگاه نظرات
      </span>
      <CommetForm postId={post._id} responseTo={null} />
    </div>
  );
};

export default PostComments;
