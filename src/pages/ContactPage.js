import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = React.useState(false);

  // EmailJS parameters
  const serviceId = 'neotopia';
  const templateId = 'template_wrmrffx';
  const userId = 'GI4kQh4DNzRXtwDJ1';

  // Function to handle form submission
  const onSubmit = (data) => {
    emailjs.send(serviceId, templateId, data, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        reset();
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      {submitted && <Alert variant="success">Your message has been sent successfully!</Alert>}

      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name (Optional)</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" {...register('name')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-danger">Email is required</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                {...register('message', { required: true })}
              />
              {errors.message && <span className="text-danger">Message is required</span>}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
