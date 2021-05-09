import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';
import Input from '../../components/UI/Input/Input';
import { isUserLoggedIn, login } from '../../actions/actionsIndex';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const loginState = useSelector((state) => state.loginState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loginState.authenticate) {
      dispatch(isUserLoggedIn);
    }
  }, [dispatch, loginState.authenticate]);

  const userLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
  };

  if (loginState.authenticate) {
    return <Redirect to={'/'} />;
  } else {
    return (
      <Layout>
        <Container>
          <Row style={{ marginTop: '50px' }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={userLogin}>
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
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
  }
};

export default SignIn;
