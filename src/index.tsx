import React from 'react';
import ReactDOM from 'react-dom';
import { debugData } from './nui/nui';

import Test from "./nui/test";

debugData([
  {
    action: 'nui-test',
    data: true
  }
])

ReactDOM.render( // Components positions are set to absolute to avoid the layout to be affected by the browser layout
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);
