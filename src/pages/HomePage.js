import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardComponent from '../components/CardComponent'

const HomePage = () => {
  return (
    <div>
      {/* Showcase Section */}
      <section className="bg-secondary text-light p-5 text-center">
        <Container className="d-sm-flex">
          <div className="p-5">
            <h1>Hi, I'm Harry</h1>
            <p className="lead">
              Fourth year student of Software Engineering at the School of Computing and
              Information Technology, College of Computing and Information 
              Sciences, Makerere University, Kampala, Uganda.
            </p>
          </div>
          <div className="ms-auto">
            <img className="img-fluid ms-auto rounded" src="images/hiraku.png" alt="iraku_harry" />
          </div>
        </Container>
      </section>

      {/* Projects Overview Section */}
      <section className="p-5 bg-light">
        <Container>
          <h2 className="text-center">Projects Overview</h2>
          <p className="lead text-center mb-5">
            Briefs on some of the projects I am/have been working on. Click on the card for more details.
          </p>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <CardComponent image="java" title="Java" link="https://iraqooh.github.io/blog-25/" linkText="Java custom package to implement common software engineering principles such as propositional and predicate logic, mathematics etc."/>
            </Col>
            <Col md={6} lg={3}>
              <CardComponent image="ai" title="Artificial Intelligence" link="https://iraqooh.github.io/blog-25/" linkText="Using machine learning and natural language processing to model a weak A.I. that generates source code from pseudocode."/>
            </Col>
            <Col md={6} lg={3}>
              <CardComponent image="languages" title="Programming Dictionary" link="https://iraqooh.github.io/blog-25/" linkText="A compilation of code snippets from the most common programming languages, from C to SQL, grouped by usage."/>
            </Col>
            <Col md={6} lg={3}>
              <CardComponent image="calculator" title="Universal Calculator" link="https://iraqooh.github.io/blog-25/" linkText="A universal calculator for executing simple to complex mathematical equations."/>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default HomePage