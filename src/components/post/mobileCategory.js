import Link from "next/link";
import { useRouter } from "next/router";

const MobileCategory = ({ categoriResult }) => {
  const { query } = useRouter();

  return (
    <div className="flex md:hidden gap-x-4 overflow-auto pb-5 mb-4">
      <Link
        href={`/blogs`}
        className={`block border border-gray-500 bg-white rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap text-sm ${
          !query.categoriSlug
            ? "border-2 border-purple-700 text-purple-700 bg-purple-100 "
            : ""
        }`}
      >
        همه مقالات
      </Link>
      {categoriResult.map((category) => {
        return (
          <Link
            href={`/blogs/${category.englishTitle}`}
            key={category._id}
            className={`block border border-gray-500 bg-white rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap text-sm ${
              query.categoriSlug === category.englishTitle
                ? "border-2 border-purple-700 text-purple-700 bg-purple-100 "
                : ""
            }`}
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileCategory;
