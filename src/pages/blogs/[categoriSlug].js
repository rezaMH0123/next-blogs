import DesktopCategori from "@/components/post/desktopCategory";
import MobileCategori from "@/components/post/mobileCategory";
import PostList from "@/components/post/postList";
import Layout from "@/containers/layout";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import queryString from "query-string";
export default function CategoryPage({ blogsData, categoriResult }) {
  return (
    <Layout>
      <div
        style={{ minHeight: "600px" }}
        className="flex justify-center w-[95%] mx-auto min-h-[500px]"
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
                <li className="py-4 cursor-pointer">پربازدید ترین</li>
                <li className="py-4 cursor-pointer">محبوب ترین</li>
                <li className="py-4 cursor-pointer">جدید ترین</li>
              </ul>
            </div>
          </div>
          <MobileCategori categoriResult={categoriResult} />
          <div className="w-full grid grid-cols-6 gap-6">
            <PostList blogsData={blogsData.docs} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { params, req } = context;
  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts?page=1&limit=6&categorySlug=${params.categoriSlug}`,
    {
      withCredentials: true,
      headers: {
        Cookie: req.headers.cookie,
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
