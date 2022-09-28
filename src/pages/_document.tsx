import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-slate-100 text-slate-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
