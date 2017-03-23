import View from './react-mvp-view';
import Presenter from './react-mvp-presenter';
import { ConnectComponent } from '../../util';

const states = [
  {
    name: 'app.react-mvp',
    url: '/react-mvp',
    component: ConnectComponent(View, Presenter),
  },
];

export default states;
