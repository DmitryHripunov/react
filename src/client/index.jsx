import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Header } from '../sahared/Header'

window.addEventListener('load', () => {
  ReactDom.hydrate(<Header />, document.getElementById('root'));
});
