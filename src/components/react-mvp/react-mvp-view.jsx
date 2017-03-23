import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Container, Icon } from 'semantic-ui-react'

import './react-mvp.css';

class ReactMVPView extends PureComponent {
  constructor(props) {
    super(props);

    this.presenter = props.presenter;
    this.presenter.setView(this);

    this.state = {

    };
  }

  //===== VIEW MANAGEMENT

  render() {
    return (
      <div className="layout-full-height" id="react-mvp">
        <header>
          Header
        </header>

        <main className="grid-container">
          Main
        </main>

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
      </div>
    );
  }
};

ReactMVPView.propTypes = {
  presenter: React.PropTypes.shape({
    setView: React.PropTypes.func,
  }),
};

export default ReactMVPView;
