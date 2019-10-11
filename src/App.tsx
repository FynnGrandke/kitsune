import React from 'react';
import { render } from 'react-dom';
import { Menu } from './components/Menu';
import './../public/css/demo.css';
import './../public/css/fox.css';
import './../public/css/main.css';

render(
  <Menu />,
  document.getElementById('root')
);
