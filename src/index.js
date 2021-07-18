import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client'
import githubApolloClient from './graphql';

ReactDOM.render(
  <ApolloProvider client={githubApolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


