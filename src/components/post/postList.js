import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import PostInteraction from "./PostInteraction";
const PostList = ({ blogsData }) => {
  return blogsData.map((item, index) => {
    return (
      <div
        key={index}
        className="col-span-6 md:col-span-3 lg:col-span-2 bg-white overflow-hidden rounded-2xl  p-2"
      >
        <div className="h-40 aspect-w-16 aspect-h-9">
          <Link href={`/posts/${item.hashId}/${item.slug}`}>
            <img
              alt=""
              src={item.coverImage}
              className="rounded-2xl w-full h-full object-center object-cover"
            />
          </Link>
        </div>
        <div className="bg-[#f8f8f8]  rounded-xl mt-5 min-h-[150px]">
          <div className=" min-h-[50px]">
            <Link href={`/posts/${item.hashId}/${item.slug}`}>
              <h2 className="mr-1">{item.title.substring(0, 58) + "..."}</h2>
            </Link>
          </div>
          <div className="flex items-center justify-between p-1  ">
            <div className="flex py-4">
              <img
                alt=""
                src="/images/js.png"
                className="w-6 h-6 rounded-full ring-white ml-2"
              />
              <span className="text-sm text-gray-400">رضا محنت کش</span>
            </div>
            <span className="text-xs px-2 py-1 font-bold rounded-xl bg-purple-300 text-purple-600  cursor-pointer hover:bg-purple-500 hover:text-purple-100">
              <Link href={`/blogs/${item.category.title}`}>
                {item.category.title}
              </Link>
            </span>
          </div>
          <div className="flex justify-between p-1">
            <div className="icons flex justify-center items-center">
              <PostInteraction post={item} isSmall />
            </div>
            <div className="lessonTime  flex items-center gap-x-1">
              <ClockIcon className="w-4 h-4 stroke-slate-600 mt-1 " />
              <span className="text-xs text-slate-500">
                زمان مطالعه: {item.readingTime}دقیقه
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default PostList;
