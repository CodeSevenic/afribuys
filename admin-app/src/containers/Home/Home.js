import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Jumbotron
        style={{ margin: '5rem', background: '#fff' }}
        className="text-center"
      >
        <h1>Welcome to Admin Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          dolore nobis laudantium iusto dolorem fugiat, accusantium fuga ipsa
          qui consequuntur, magnam quia minima magni amet dignissimos quibusdam,
          saepe nulla? Impedit!
        </p>
      </Jumbotron>
    </Layout>
  );
};

export default Home;