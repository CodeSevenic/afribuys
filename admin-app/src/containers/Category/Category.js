import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllCategory } from '../../actions/actionsIndex';
import Layout from '../../components/Layout/Layout';

const Category = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Category</h3>
              <button>Add</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Category;
