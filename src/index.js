import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={e => e.target.innerText = "I am now Sad"} />
  </div>,
  document.getElementById('root')
);