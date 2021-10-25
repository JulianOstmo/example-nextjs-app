import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
