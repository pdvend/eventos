import React, { PureComponent } from 'react';

import { Row, Col } from 'react-flexbox-grid';
import { Button } from 'semantic-ui-react';

import './subscribe.css';

class Subscribe extends PureComponent {
  render() {
    return (
      <section id="subscribe" className="grid-container">
        <Row center="xs">
          <Col xs>
            <Button color='green' size='massive' href="https://docs.google.com/forms/d/e/1FAIpQLScYTLFNn8-Qef31f5oiKrdO3mQcwfyXnyHh0CO5ZlhXRAYgeA/viewform" target="_blank">
              Quero me inscrever
            </Button>
          </Col>
        </Row>
      </section>
    );
  }
};

export default Subscribe;
