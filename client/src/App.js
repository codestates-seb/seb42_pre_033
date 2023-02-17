import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
