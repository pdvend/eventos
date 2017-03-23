import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import * as assets from './assets';
import './header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="grid-container">
        <Row>
          <Col>
            <img src={assets.logo} alt="PDVend" />
          </Col>
        </Row>
      </header>
    );
  }
};

export default Header;
