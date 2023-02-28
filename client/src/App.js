import GlobalStyles from './styles/GlobalStyles';
import Router from './Router';
import { Fragment, useEffect } from 'react';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { checkedLogin } = useAuthContext();

  useEffect(() => {
    checkedLogin();
  }, []);

  return (
    <Fragment>
      <Router />
      <GlobalStyles />
    </Fragment>
  );
}

export default App;
