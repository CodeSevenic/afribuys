import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Input from '../../components/UI/Input/Input';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Signup = () => {
  const loginState = useSelector((state) => state.loginState);

  if (loginState.authenticate) {
    return <Redirect to={'/'} />;
  }
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>

                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>

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

export default Signup;
