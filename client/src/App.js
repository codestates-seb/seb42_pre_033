import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Main from './components/Main';
import UserEdit from './components/UserEdit/UserEdit';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/users/edit' element={<UserEdit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
