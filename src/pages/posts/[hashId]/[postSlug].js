import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
  BookmarkIcon,
  LinkIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

import { CopyToClipboard } from "react-copy-to-clipboard";
import PostList from "@/components/post/postList";
import PostComments from "@/components/comments";
import Layout from "@/containers/layout";
import PostInteraction from "@/components/post/PostInteraction";
const PostPage = ({ post }) => {
  const [copid, setCopid] = useState(false);

  const copyHandler = () => {
    setCopid(true);
    setTimeout(() => {
      setCopid(false);
    }, 1000);
  };
  return (
    <Layout>
      <div className="container lg:max-w-screen-xl px-6 md:px-2  mx-auto ">
        <header className="header w-full flex min-h-[150px] mx-auto">
          <div className="TrainerProfile flex gap-x-3 w-3/5 p-2 ">
            <div className="img rounded-full  w-14 h-14 md:w-24 md:h-24">
              <img
                src="/images/reza.png"
                className="ring-white h-full  rounded-full max-w-none"
              />
            </div>
            <div className="portofolio w-72">
              <div className="flex gap-x-3 p-2">
                <span className="font-bold text-lg">{post.author.name}</span>
                <span className="text-xs px-2 py-1 flex items-center font-bold rounded-xl border border-purple-300 text-purple-600  cursor-pointer hover:bg-purple-500 hover:text-purple-100">
                  <Link href={`/blogs/${post.category.title}`}>
                    {post.category.title}
                  </Link>
                </span>
              </div>
              <span className="font-vazir text-xs hidden md:block px-2">
                {post.author.biography}
              </span>
              <span className="text-sm  px-2">
                {new Date(post.createdAt).toLocaleDateString("fa-IR")}
              </span>
            </div>
          </div>
          <div className="StorageSection w-2/5 flex flex-row-reverse justify-center gap-x-2">
            <div className="rounded-2xl border border-gray-400 flex items-center cursor-pointer w-fit h-fit px-2 py-1 mt-4">
              <span className="text-xs font-vazir">ذخیره</span>
              <BookmarkIcon className="w-6 h-6 " />
            </div>
            <LinkIcon className="w-6 h-6 mt-5 cursor-pointer" />
          </div>
        </header>
        <main
          className="prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl  prose-h1:font-black prose-h2:text-xl
         prose-h2:font-extrabold prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10
        prose-img:rounded-xl prose-img:w-full prose-a:text-blue-500 mb-8 max-w-screen-md  mx-auto
        "
        >
          <h1>{post.title}</h1>
          <h2>عنوان اول تستی</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <img src={post.coverImage} alt="" />
          <h2>عنوان تستی دوم </h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <h2>نحوه کانفیگ تیلویند</h2>
          <p>
            بدون استفاده از <a href="https://highlightjs.org/">highlight.js</a>{" "}
            میتوان به سادگی کدها را داخل محتوای بلاگ ها قرار داد!
          </p>
          <p>
            به عنوان مثال، برای کانفیگ تیلویند باید از فایل{" "}
            <code>tailwind.config.js</code> استفاده کرد:
          </p>
          <pre dir="ltr">{`module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
`}</pre>
        </main>
        <section>
          <ul className="flex items-center flex-wrap gap-x-4 mb-6">
            {["ریکت", "جاوااسکریپت", "فرانت اند", "Next.js"].map(
              (tag, index) => {
                return (
                  <li
                    key={index}
                    className="px-3 py-1 rounded-2xl bg-gray-200 hover:bg-gray-100 transition-all  cursor-pointer text-gray-600 tex-sm mb-3 block"
                  >
                    {tag}
                  </li>
                );
              }
            )}
          </ul>
        </section>
        <div className="icons  flex justify-center md:justify-between items-center gap-x-6 mb-8">
          <div className="PostFeedback flex items-center gap-x-4">
            <PostInteraction post={post} />
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-x-5 md:w-auto">
              <a href={`#`} target="_blank" className="block" rel="noreferrer">
                <IoLogoLinkedin
                  size={30}
                  className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a href={`#`} target="_blank" rel="noreferrer" className="block">
                <IoLogoTwitter
                  size={24}
                  className="fill-gray-400  hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a className="block" rel="noreferrer" target="_blank" href={`#`}>
                <FaTelegram
                  className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                  size={24}
                />
              </a>
            </div>
            <div className="copid mr-2 ml-2  border border-slate-800 p-2 rounded-xl cursor-pointer font-vazir relative ">
              <CopyToClipboard
                text={`http://localhost:3000/posts/${post.hashId}/${post.slug}`}
                onCopy={copyHandler}
              >
                <div className="flex gap-x-2 w-max  ">
                  <span className="text-xs">کپی لینک</span>
                  <MdContentCopy size={20} />
                </div>
              </CopyToClipboard>
              {copid === true && (
                <span className="absolute  border-2 border-green-700 rounded-md py-2 px-6 font-vazir -top-24  left-0">
                  لینک کپی شد
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="br border-t-2 border-black mb-5"></div>
        <section className="mb-8">
          <h2 className="font-extrabold font-vazir text-2xl md:text-3xl mb-8">
            پست های مشابه
          </h2>
          <div className=" grid grid-cols-6 gap-6">
            <PostList blogsData={post.related} />
          </div>
        </section>

        <div className="commentsBox flex flex-col">
          {/* post comments */}
          <PostComments post={post} />
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`, {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie,
    },
  });
  return {
    props: { post: data },
  };
}
