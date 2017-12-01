import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Comments from './components/Comments';
import CommentBox from './components/CommentBox';
import './App.css';
import 'bulma/css/bulma.css';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://0.0.0.0:5000/graphql'}),
  cache: new InMemoryCache({
    dataIdFromObject: o => o.id,
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <CommentBox />
      <Comments />
    </div>
  </ApolloProvider>
);

export default App;
