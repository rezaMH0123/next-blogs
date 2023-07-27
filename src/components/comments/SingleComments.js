import { UserCircleIcon } from "@heroicons/react/24/outline";
import toLocalDate from "@/utils/toLocalDate";
import { useState } from "react";
import CommetForm from "./commetForm";

const SingleComments = ({ comment, postId }) => {
  const [reply, setReply] = useState(false);
  return (
    <div className="rounded-xl mb-8 overflow-hidden shadow-lg border border-gray-100 bg-white">
      <div className="flex flex-col">
        <div className="flex items-center justify-start px-4 py-2">
          <UserCircleIcon
            className="w-12 h-12 stroke-gray-400"
            strokeWidth={1}
          />
          <div className="flex flex-col justify-between mr-4">
            <span className="block text-sm text-gray-600">
              {comment.writer?.name}
            </span>
            <span className="block text-xs text-gray-500 mt-2 dark:text-slate-500">
              {toLocalDate(comment.createdAt)}
            </span>
          </div>
        </div>
        <div className="m-3 flex flex-col">
          {comment.content}
          <button
            className="w-fit mt-1 px-3 py-1 text-violet-600 rounded-2xl"
            onClick={() => setReply(!reply)}
          >
            {reply === false ? "پاسخ به" : "بیخیال"}
          </button>
          {reply && (
            <>
              <span className="font-vazir text-md text-stone-500 mt-6">
                در حال پاسخ به {comment.writer?.name}
              </span>
              <CommetForm postId={postId} responseTo={comment._id} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleComments;
