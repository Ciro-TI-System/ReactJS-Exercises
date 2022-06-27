import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import { client } from './lib/apollo';
import { ApolloProvider } from '@apollo/client';



//Aqui o 'render' mostra a aplicação em tela dentro do arquivo 'root'.
// Here 'render' shows the application on screen inside the 'root' file.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client = { client }>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
