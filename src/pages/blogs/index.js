import DesktopCategori from "@/components/post/desktopCategory";
import MobileCategori from "@/components/post/mobileCategory";
import PostList from "@/components/post/postList";
import Layout from "@/containers/layout";
import routerPush from "@/utils/routerPush";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useEffect, useState } from "react";
import PaginationComponent from "@/common/paginationComponent";

const sportOptions = [
  { label: "پربازدید ترین", id: "most" },
  { label: "محبوب ترین", id: "popular" },
  { label: "جدید ترین", id: "newest" },
];
export default function MyBlogs({ blogsData, categoriResult }) {
  const router = useRouter();
  const [sort, setSort] = useState(router.query.sort || "newest");
  const sortHandler = (id) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router);
  };

  useEffect(() => {
    router.query.sort = "newest";
    routerPush(router);
  }, []);

  return (
    <Layout>
      <div
        style={{ minHeight: "600px" }}
        className="flex justify-center w-[95%] mx-auto"
      >
        <div className="rightBox hidden md:flex flex-col items-center w-3/12 py-4">
          <DesktopCategori categoriResult={categoriResult} />
        </div>
        <div className="leftBox w-9/12 py-4">
          {/* sort desktop */}
          <div className="hidden md:block w-full mb-4">
            <div className="flex bg-white rounded-2xl px-4 items-center font-vazir">
              <AdjustmentsVerticalIcon className="w-6 h-6 ml-1" />
              <span className="ml-3">مرتب سازی:</span>
              <ul className="flex gap-x-3">
                {sportOptions.map(({ id, label }) => {
                  return (
                    <li
                      className={`cursor-pointer text-gray-700 relative py-4 ${
                        id === sort ? "text-purple-700 font-bold" : ""
                      }`}
                      key={id}
                      onClick={() => sortHandler(id)}
                    >
                      {label}
                      {id === sort && (
                        <span className="h-[3px] bg-purple-700 w-8 rounded absolute right-0 bottom-0"></span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <MobileCategori categoriResult={categoriResult} />
          <div className="w-full grid grid-cols-6 gap-6">
            <PostList blogsData={blogsData.docs} />
            <div className=" col-span-6 flex justify-center items-center">
              <PaginationComponent
                totalpage={blogsData.totalPages}
                page={blogsData.page}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ req, query }) {
  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`,
    {
      withCredentials: true,
      headers: {
        Cookie: req.headers.cookie || "",
      },
    }
  );
  const { data: categoriResult } = await axios.get(
    "http://localhost:5000/api/post-category"
  );
  const { data } = result;
  return {
    props: {
      blogsData: data,
      categoriResult: categoriResult.data,
    },
  };
}
