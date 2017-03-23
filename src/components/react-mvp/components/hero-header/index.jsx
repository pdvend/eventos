import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Container, Divider } from 'semantic-ui-react'

import * as assets from './assets';
import './hero-header.css';

class HeroHeader extends PureComponent {
  render() {
    return (
      <div className="hero-header">
        <div className="hero-header__background-mask"/>
        <Container className="hero-header__container" textAlign="center">
          <h2 className="color-accent">&lt;</h2>
          <h1>REACT</h1>
          <h2 className="color-accent">+</h2>
          <h1>MVP</h1>
          <h2 className="color-accent">&gt;</h2>
          <Divider />
          <h5>Uma abordagem prática sobre como estruturar aplicações em React</h5>
        </Container>
      </div>
    );
  }
};

export default HeroHeader;
