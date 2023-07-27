import http from "@/services/httpService";
import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

const CommetForm = ({ postId, responseTo }) => {
  // {content,postId,responsTO}
  const router = useRouter();
  const [textValue, setTextValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      content: textValue,
      postId,
      responseTo,
    };
    http
      .post("/post-comment/save-comment", data)
      .then((res) => {
        setTextValue("");
        toast.success(res.data.message);
        routerPush(router);
      })
      .catch((err) => toast.error(err?.response?.data?.message));
  };
  return (
    <form className="mt-6 mb-5">
      <textarea
        type="textarea"
        className="text-right border p-2 text-sm rounded border-gray-200 outline-none w-full
                    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="نظرت رو برام بنویس..."
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button
        className="mt-4 mx-auto py-3 w-full sm:w-44 bg-violet-700 rounded-2xl text-white px-3 md:text-lg"
        onClick={submitHandler}
      >
        ارسال نظر
      </button>
    </form>
  );
};

export default CommetForm;
