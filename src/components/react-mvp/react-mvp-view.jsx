import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Container, Icon } from 'semantic-ui-react'

import Header from '../../core/view/header';
import Footer from '../../core/view/footer';

import HeroHeader from './components/hero-header';

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
        <Header />
        <HeroHeader />

        <main className="grid-container">
          Main
        </main>

        <Footer />
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
