import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

const About = ({ movies }) => (
  <Layout>
    <div className={styles.container}>
      <h1 className={styles.title}>About NextJS</h1>
      <h3>Movie List</h3>
      {movies.map((item) => <li key={item.imdbID}>{item.Title}</li>)}
    </div>
  </Layout>
);

export async function getServerSideProps() {
  const response = await fetch(`https://jsonmock.hackerrank.com/api/movies?Year=2012`);
  const result = await response.json();
  return { props: {movies: result.data} };
}

export default About;
