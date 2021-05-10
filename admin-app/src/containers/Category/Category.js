import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';

const Category = () => {
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <h3>Category</h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Category;
