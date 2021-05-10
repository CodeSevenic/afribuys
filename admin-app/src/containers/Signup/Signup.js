import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Input from '../../components/UI/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { signup } from '../../actions/actionsIndex';

const Signup = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const loginState = useSelector((state) => state.loginState);

  const dispatch = useDispatch();

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      name,
      surname,
      email,
      password,
    };
    dispatch(signup(user));
  };

  if (loginState.authenticate) {
    return <Redirect to={'/'} />;
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First name"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>

                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last name"
                    value={surname}
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </Col>
              </Row>

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
};

export default Signup;
