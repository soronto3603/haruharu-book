import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header'

import Contents from './components/Contents'

import App from './App';

import Footer from './components/Footer'

ReactDOM.render(<Header title={"하루하루"} />,document.getElementById('header'));
ReactDOM.render(
    <BrowserRouter>
      <Contents />
    </BrowserRouter>
  , document.getElementById('root'));
// ReactDOM.render(
//     <BrowserRouter>
//       <Footer />
//     </BrowserRouter>, document.getElementById('footer'));

registerServiceWorker();
