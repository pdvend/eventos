import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Container, Icon } from 'semantic-ui-react'

import './footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <div className="grid-container">
          <Row>
            <Col xs>
              <Container fluid textAlign='right'>
                <a href="https://github.com/pdvend/eventos" target="_blank">
                  <Icon name='code' />
                </a>
                <span>com</span>
                <a href="https://github.com/pdvend/eventos/graphs/contributors" target="_blank">
                  <Icon name='heart' />
                </a>
              </Container>
            </Col>
          </Row>
        </div>
      </footer>
    );
  }
};

export default Footer;
