import React, { PureComponent } from 'react';

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
      <div className="layout-full-height grid-container">
        <h1>Hello World from React MVP</h1>
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
