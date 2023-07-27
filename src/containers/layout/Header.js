import { useAuth, useAuthAction } from "@/context/AuthContext";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// import { signout } from "src/redux/user/userActions";

const Header = () => {
  //   const userInfo = useSelector((state) => state.userSignin);
  //   const { user, loading } = userInfo;
  //   const dispatch = useDispatch();
  const dispatch = useAuthAction();
  const { user } = useAuth();
  return (
    <header className={`bg-white shadow-md py-2 mb-4 sticky top-0 z-40`}>
      <div
        className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0 transition-all`}
      >
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href="/" legacyBehavior>
                <a className="py-2 block">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs" legacyBehavior>
                <a className="py-2 block">Blogs</a>
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            {user ? (
              <>
                <button
                  className="bg-purple-700 px-3 py-0.5 rounded text-white font-vazir font-bold"
                  onClick={() => dispatch({ type: "SIGNOUT" })}
                >
                  خروج
                </button>
                <Link href="/profile" legacyBehavior>
                  <a className="py-2 block">
                    Profile:
                    {user?.name}
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/signup" legacyBehavior>
                  <a className="block">ثبت نام</a>
                </Link>
                <Link href="/signin" legacyBehavior>
                  <a className="block">ورود</a>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
