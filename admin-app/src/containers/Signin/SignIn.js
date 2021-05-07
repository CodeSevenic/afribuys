import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';
import Input from '../../components/UI/Input/Input';
import { login } from '../../actions/actionsIndex';
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();
    const user = { email: 'test@test.com', password: '123456' };
    dispatch(login(user));
  };

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="email"
                onChange={() => {}}
              />

              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SignIn;
