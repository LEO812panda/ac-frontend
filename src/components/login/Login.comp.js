import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function LoginForm({
  handleOnChange,
  handleOnSubmit,
  formSwitcher,
  email,
  pass,
}) {
  return (
    <Container className="small-container">
      <Row>
        <Col>
          <h1 className="my-3">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={pass}
                onChange={handleOnChange}
                placeholder="Enter Password"
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-3">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mb-3">
            <a href="#!" onClick={() => formSwitcher('rest')}>
              Forget Password?
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

LoginForm.propType = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};
