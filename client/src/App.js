import GlobalStyles from './styles/GlobalStyles';

import Router from './Router';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Router />
      <GlobalStyles />
    </Fragment>
  );
}

export default App;
