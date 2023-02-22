import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Main from './components/layout/Main/Main';
import UserEdit from './components/User/UserEdit/UserEdit';
import UserProfile from './components/User/UserProfile/UserProfile';
import UserDelete from './components/User/UserDelete/UserDelete';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/users/profile' element={<UserProfile />}></Route>
        <Route path='/users/edit' element={<UserEdit />}></Route>
        <Route path='/users/Delete' element={<UserDelete />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
