import React from 'react';
import { render } from 'react-dom';
// import { WriteMessage } from './components/WriteMessage';
import './../public/css/demo.css';
import './../public/css/fox.css';
import './../public/css/main.css';
// import { ReplyMessage } from './components/ReplyMessage';
import { Menu } from './components/Menu';

render(
  <Menu />,
  document.getElementById('root')
);
