import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './components/Login/Login';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import AskQuestionPage from './pages/AskQuestionPage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import UserEditWrapper from './components/User/UserEdit/UserEditWrapper';
import UserProfileWrapper from './components/User/UserProfile/UserProfileWrapper';
import UserDeleteWrapper from './components/User/UserDelete/UserDeleteWrapper';

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignupPage />} />
      </Route>

      <Route
        element={
          <Layout
            displayLeftAside
            displayRightAside
            displayFooter
            displayMainHeader
          />
        }
      >
        <Route path='/' element={<HomePage />} />
      </Route>

      <Route element={<Layout displayLeftAside displayFooter />}>
        <Route path='/question/:questionId' element={<QuestionDetailPage />} />
        <Route path='/users/profile' element={<UserProfileWrapper />} />
        <Route path='/users/edit' element={<UserEditWrapper />} />
        <Route path='/users/Delete' element={<UserDeleteWrapper />} />
      </Route>

      <Route element={<Layout displayFooter />}>
        <Route path='/question/ask' element={<AskQuestionPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
