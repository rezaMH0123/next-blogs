import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Input from "@/components/FormInput";
import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth, useAuthAction } from "@/context/AuthContext";
import Layout from "@/containers/Layout/Layout";

// import { useDispatch, useSelector } from "react-redux";
// import { userSignin } from "src/redux/user/userActions";
//  initial values
const initialValues = {
  email: "",
  password: "",
};

//  validation schema
const validationSchema = Yup.object({
  email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل شامل 8 کارارکتر باشد"),
});

const SigninForm = () => {
  const router = useRouter();
  const dispatch = useAuthAction();
  const { user } = useAuth();

  const onSubmit = (values) => {
    dispatch({ type: "SIGNIN", payload: values });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  return (
    <Layout>
      <Head>
        <title>Front Hooks- Signup</title>
      </Head>
      <div className="md:max-w-md px-4 md:px-4 container  mx-auto min-h-[600px]">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <h1 className="font-black text-2xl text-violet-700 mb-4">ورود</h1>
          <Input label="ایمیل" name="email" formik={formik} />
          <Input
            label="رمز عبور"
            name="password"
            type="password"
            formik={formik}
          />

          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full py-2 rounded-lg bg-violet-800 text-white"
          >
            ورود
          </button>
          <Link href="/signup">
            <p className="mt-4 py-4 cursor-pointer">
              هنوز ثبت نام نکردی؟ لاگین
            </p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default SigninForm;
