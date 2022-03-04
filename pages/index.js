import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import aboutStyles from "../styles/About.module.css";
import workStyles from "../styles/Work.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anadya Nair</title>
        <meta name="description" content="Website/Portfolio." />
        <link rel="icon" href="/anadya.png" />
      </Head>

      <main className={styles.main}>
        {/* <div className={aboutStyles.leftFixed}> */}
        <div className={aboutStyles.aboutMe}>
          <div className={aboutStyles.anadyaImage}>
            <Image
              src="/anadya.png"
              alt="Anadya Picture"
              width={150}
              height={150}
            />
          </div>
          <h3 className={aboutStyles.name}>
            Anadya Nair
            <Image
              src="/verified.svg"
              alt="Verified Person"
              width={30}
              height={30}
            />
          </h3>

          <div className={aboutStyles.tags}>
            Student • Developer •<br /> Learning-Designer • He/Him • India
          </div>

          <br />

          <div className={aboutStyles.regardingMe}>
            <p>
              I’m Anadya Nair; a student and a developer, (he/him). My
              <br />
              nationality is Indian. I am a young developer, with an
              <br />
              experience of 2½ years in coding.
              <br /> <br />
              I am currently practicing my hands upon web
              <br />
              development, UI designing, backend, and automation. As
              <br />
              well as I am the owner and I manage a GitHub organization
              <br />
              called the Developer Capsule (currently inactive...).
              <br /> <br />
              I’ve been a keen learner since childhood and am curious
              <br /> about many things. This behaviour is what made me take
              <br />
              an interest in technology and to learn about it. I’ve now
              <br />
              practiced hands on programming frameworks and
              <br />
              languages and am looking forward to build something
              <br />
              amazing.
            </p>
          </div>

          <div className={aboutStyles.mediaHandles}>
            <ul>
              <li>
                <Link href="https://github.com/AnadyaNair">
                  <Image src="/githubLogo.svg" width={25} height={25}></Image>
                </Link>
              </li>
              <span className={aboutStyles.spanSpacing}></span>
              <li>
                <Link href="https://twitter.com/AnadyaNair">
                  <Image src="/twitterLogo.svg" width={25} height={25}></Image>
                </Link>
              </li>
              <span className={aboutStyles.spanSpacing}></span>
              <li>
                <Link href="https://instagram.com/AnadyaNair">
                  <Image
                    src="/instagramLogo.svg"
                    width={25}
                    height={25}
                  ></Image>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}

        <div className={workStyles.workSection}>
          <h2>Works</h2>
          <div className={workStyles.showcase}>DIV DIV DIV DIV ALL DIVS</div>
        </div>
      </main>
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/* Colophon */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by Anadya Nair. Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
