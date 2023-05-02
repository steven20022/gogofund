import './App.css';
import AppRouter from './router';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return(
    <AppRouter />
  );
}

export default withAuthenticator(App);
