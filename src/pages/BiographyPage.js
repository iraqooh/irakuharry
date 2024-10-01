import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const BiographyPage = () => {
  return (
    <Container className="p-5">
      {/* <Row className="mb-5 text-center">
        <Col>
          <h1>Biography</h1>
          <p className="lead">
            A brief biography of Makerere University Software Engineering student, Iraku Harry.
          </p>
        </Col>
      </Row> */}

      <Row className="align-items-center">
        <Col md={4}>
          <Image
            src="images/hiraku.png"
            alt="Iraku Harry"
            rounded
            fluid
          />
        </Col>

        <Col md={8}>
          <Card className="bg-light p-4">
            <Card.Body>
              <Card.Title as="h2">Iraku Harry</Card.Title>
              <Card.Text className="lead">
                I am a fourth-year Software Engineering student at the School of Computing and Information Technology, 
                College of Computing and Information Sciences, Makerere University in Kampala, Uganda. 
                I have a strong passion for technology, programming, and problem-solving.
              </Card.Text>
              <Card.Text>
                My key areas of interest include:
                <ul>
                  <li>Machine Learning and AI</li>
                  <li>Natural Language Processing (NLP)</li>
                  <li>Web Development</li>
                  <li>Software Engineering Principles</li>
                </ul>
                
                I&apos;m working on a project called "<strong>Automated Exam Grading System Using AI</strong>." 
                This project involves using AI-driven natural language processing techniques to enhance the accuracy 
                and efficiency of grading student essays.
              </Card.Text>
              <Card.Text>
                I am dedicated to building innovative solutions that can create a positive impact on communities and the world at large.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <p className="lead text-center">
            For more information about my projects, feel free to check out my <a href="https://github.com/iraqooh" target="_blank" rel="noopener noreferrer">GitHub</a> or visit my <a href="https://iraqooh.github.io/irakuharry/" target="_blank" rel="noopener noreferrer">portfolio website</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default BiographyPage;