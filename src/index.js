import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import {ThemeProvider} from 'styled-components';

const theme = {
  colors: {
    primary_300: '#220000',
    primary_400: '#440000',
    primary_500: '#af0505',
  }
}


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

