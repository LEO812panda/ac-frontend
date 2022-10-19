import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ResetPassword({
  handleOnChange,
  handleOnResetSubmit,
  formSwitcher,
  email,
}) {
  return (
    <Container className="small-container">
      <Row>
        <Col>
          <h1 className="my-3">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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

            <Button type="submit" className="mt-3">
              ResetPassword
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mb-3">
            <a href="#!" onClick={() => formSwitcher('login')}>
              Loging now?
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

ResetPassword.propType = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
