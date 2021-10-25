import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

const arrow = '\u2192';

const cards = [
  {
    key: '1',
    title: `About ${arrow}`,
    description: 'Details about this site.',
    href: '/about',
  },
  {
    key: '2',
    title: `Documentation ${arrow}`,
    description: 'Find in-depth information about Next.js features and API.',
    href: 'https://nextjs.org/docs',
  },
  {
    key: '3',
    title: `Learn ${arrow}`,
    description: 'Learn about Next.js in an interactive course with quizzes!',
    href: 'https://nextjs.org/learn',
  },
  {
    key: '4',
    title: `Examples ${arrow}`,
    description: 'Discover and deploy boilerplate example Next.js projects.',
    href: 'https://github.com/vercel/next.js/tree/master/examples',
  },
  {
    key: '5',
    title: `Deploy ${arrow}`,
    description:
      'Instantly deploy your Next.js site to a public URL with Vercel.',
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            {cards.map(({ key, title, description, href }) => (
              <a href={href} className={styles.card} key={key}>
                <h2>{title}</h2>
                <p>{description}</p>
              </a>
            ))}
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
      );
    </Layout>
  );
}
