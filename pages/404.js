import errorStyles from "../styles/Error.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Anadya Nair | 404 Page</title>
        <meta name="description" content="Website/Portfolio." />
        <link rel="icon" href="/anadya.png" />
      </Head>
      <div className={errorStyles.main}>
        <div className={errorStyles.box}>
          {/* <h1>404, page not found.</h1> */}
          <h1>
            ¯\_(ツ)_/¯
            <br />
          </h1>
          <h3>404, page not found.</h3>
          {/* <p>
            <br />
            The page you came looking for, does not exist.
            <br />
            Check whether you typed the correct link.
            <br />
            You can return to the home page, there might
            <br />
            be navigations.
          </p> */}
          <button>
            <Link href="https://anadyanair.vercel.app">
              <a>Return To Home Page</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
