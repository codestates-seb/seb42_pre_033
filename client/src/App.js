import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
