import React from 'react';
import './Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/orders">Orders</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={10} style={{ marginLeft: 'auto' }}>
            Container
          </Col>
        </Row>
      </Container>

      {/* <Jumbotron
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
      </Jumbotron> */}
    </Layout>
  );
};

export default Home;
