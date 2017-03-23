import React, { PureComponent } from 'react';

import { Row, Col } from 'react-flexbox-grid';

import Header from '../../core/view/header';
import Footer from '../../core/view/footer';

import HeroHeader from './components/hero-header';
import EventInfo from './components/event-info';

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
      <div id="react-mvp">
        <HeroHeader />

        <main >
          <EventInfo />
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
