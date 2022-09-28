import Head from "next/head";
import { ReactElement } from "react";
import Header from "./Header";

interface Props {
  children: ReactElement;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Lark Calendar</title>
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto">{children}</main>
    </>
  );
}
