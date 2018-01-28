import React from 'react';
import { render } from 'react-dom';
import App from './app';
import rules from './rules';
import './styles';

render(<App rules={rules} />, document.querySelector('.app-container'));
