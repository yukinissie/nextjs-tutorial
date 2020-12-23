import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi! I'm <span style={{ fontWeight: 'bold' }}>Yuki</span>. I'm a
          university student and a web engineer(Ruby on Rails, React). You can
          contact me on{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/yukinissie"
          >
            Twitter
          </a>
          .
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
