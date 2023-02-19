import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import GlobalStyles from './styles/GlobalStyles';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
