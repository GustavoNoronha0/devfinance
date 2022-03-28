
import { ApolloProvider } from '@apollo/client';
import apolloClient from './login';

const AppProvider: React.FC = ({ children }) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
)

export default AppProvider
