import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from '../lib/apollo';
import { Demo } from './Demo';

export const Root: React.FC = () => (
  <div>
    <ApolloProvider client={client}>
      <Demo />
    </ApolloProvider>
  </div>
)
