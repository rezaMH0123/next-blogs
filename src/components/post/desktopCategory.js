import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const DesktopCategory = ({ categoriResult }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { query } = useRouter();

  return (
    <div className="hidden md:block w-[85%] rounded-3xl bg-white overflow-hidden">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-4 py-4 cursor-pointer"
      >
        <span>دسته بندی مقالات</span>
        <ChevronDownIcon
          className={`stroke-purple-600 w-6 h-6 transition-all duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* accordion content */}
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <Link
          className={`${
            !query.categoriSlug
              ? "bg-purple-700 text-white hover:bg-purple-500"
              : ""
          } block pr-4 py-2 hover:bg-purple-100 mb-1`}
          href="/blogs"
        >
          همه مقالات
        </Link>
        {categoriResult.map((category) => {
          return (
            <Link
              className={`${
                query.categoriSlug === category.englishTitle
                  ? "bg-purple-700 text-white hover:bg-purple-500"
                  : ""
              } block pr-4 py-2 hover:bg-purple-100 mb-1`}
              href={`/blogs/${category.englishTitle}`}
              key={category._id}
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopCategory;
