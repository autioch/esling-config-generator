import React from 'react';
import App from './app';
import actions from './actions';
import initialState from './actions/initialState';
import { createApp } from 'pipe-and-gauge';

// import rules from './rules';
import './styles';
window.React = React; // yay, no need to import react everywhere? At least for now ;)

const store = createApp(actions, initialState, App, document.querySelector('.app-container'));

store.fetchRules();
