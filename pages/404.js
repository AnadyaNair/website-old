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
          <h1>Uh oh, 404</h1>
          <p>
            The page you came looking for does not exist yet.
            <br />
            Strange? Let's go back{" "}
            <Link href="https://anadyanair.vercel.app">
              <a>
                <u>home</u>
              </a>
            </Link>
            , and wait for it to come...
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
