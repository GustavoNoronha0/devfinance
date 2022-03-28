import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accessToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const logoutLink = onError((data) => {
  const isUnauthenticated =
    data.graphQLErrors?.[0]?.extensions?.code === 'UNAUTHENTICATED';
  if (isUnauthenticated) {
    localStorage.removeItem('accessToken');
    window.location.replace('/auth');
  }
});

const AuthProvider = new ApolloClient({
  link: from([authLink, logoutLink, httpLink]),
  cache: new InMemoryCache(),
});

export default AuthProvider;