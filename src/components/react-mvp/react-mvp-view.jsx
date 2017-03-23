import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';

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
      <div className="layout-full-height">
        <header>
          Header
        </header>

        <main className="grid-container">
          Main
        </main>

        <footer>
          Footer
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
