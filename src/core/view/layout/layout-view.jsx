import React, { PureComponent } from 'react';
import { UIView } from 'ui-router-react';

import './layout.css';

class LayoutView extends PureComponent {
  render() {
    return (
      <main className="layout-full-height">
        <UIView />
      </main>
    );
  }
};

export default LayoutView;
