import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';

//import Home from './pages/Home/index';
//Quando o 'export' é adionado na função e não no final como 'default' ele é sinalizado na importação entre 'chaves'.
//When 'export' is added in the function and not at the end as 'default' it is flagged on import between 'braces'.

import {Home} from './pages/Home/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)