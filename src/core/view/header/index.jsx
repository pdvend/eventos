import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Container } from 'semantic-ui-react'

import * as assets from './assets';
import './header.css';

class Header extends PureComponent {
  render() {
    return (
      <header>
        <Row>
          <Col>
            <img src={assets.logo} />
          </Col>
        </Row>
      </header>
    );
  }
};

export default Header;
