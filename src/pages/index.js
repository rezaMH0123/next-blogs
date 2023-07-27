import Layout from "@/containers/layout";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const Home = () => {
  const { user } = useAuth();
  return (
    <Layout>
      <div className="flex justify-center h-[600px]">
        <h1 className="font-bold">
          خوش آمدید به صفحه ی اصلی {user ? user?.name : ""}
        </h1>
      </div>
    </Layout>
  );
};

export default Home;
