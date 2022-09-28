import { GetServerSideProps } from "next";
import { getCsrfToken } from "next-auth/react";
import { NextPageWithLayout } from "./_app";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

interface Props {
  csrfToken?: string;
}

const SignIn: NextPageWithLayout<Props> = ({ csrfToken }) => {
  return (
    <div className="max-w-lg mx-auto space-y-10 mt-10">
      <h2 className="text-3xl font-bold text-center">
        Sign in to your account
      </h2>
      <form
        method="post"
        action="/api/auth/signin/email"
        className="px-10 py-7 bg-white rounded-md shadow-md flex flex-col gap-7 text-slate-500"
      >
        <input
          name="csrfToken"
          type="hidden"
          defaultValue={csrfToken}
          className="border-slate-400"
        />
        <label>
          Email address
          <input type="email" id="email" name="email" />
        </label>
        <button type="submit">Sign in</button>
        <div className="grid grid-cols-3 gap-3 items-center">
          <div className="h-px bg-slate-400" />
          <p className="text-center">Or continue with</p>
          <div className="h-px bg-slate-400" />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <button className="border border-slate-400 py-2 rounded-md flex items-center justify-center">
            <FaFacebook className="text-xl" />
          </button>
          <button className="border  border-slate-400 py-2 rounded-md flex items-center justify-center">
            <FaTwitter className="text-xl" />
          </button>
          <button className="border  border-slate-400 py-2 rounded-md flex items-center justify-center">
            <FaGoogle className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
};

export default SignIn;
