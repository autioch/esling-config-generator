import React from 'react';
import { render } from 'react-dom';
import App from './app';
import rules from './rules';
import './styles';

window.React = React; // yay, no need to import react everywhere? At least for now ;)

render(<App rules={rules} />, document.querySelector('.app-container'));
