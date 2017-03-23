import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Container, Divider } from 'semantic-ui-react'

import './hero-header.css';

class HeroHeader extends PureComponent {
  render() {
    return (
      <Row className="hero-header" middle="xs">
        <Col xs>
          <Container className="hero-header__container" textAlign="center">
            <h1>REACT</h1>
            <h2 className="color-accent">+</h2>
            <h1>MVP</h1>
            <Divider />
            <h5>Uma abordagem prática sobre como estruturar aplicações em React</h5>
          </Container>
        </Col>
      </Row>
    );
  }
};

export default HeroHeader;
