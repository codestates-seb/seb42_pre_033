import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import QuestionAskPage from './pages/QuestionAskPage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import QuestionEditPage from './pages/QuestionEditPage';
import UserProfilePage from './pages/UserProfilePage';
import UserEditPage from './pages/UserEditPage';
import UserDeletePage from './pages/UserDeletePage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import Protected from './components/Protected/Protected';

function Router() {
  return (
    <Routes>
      <Route element={<Layout fullWidth />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='*' element={<ErrorPage />} />
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
        <Route path='/question' element={<HomePage />} />
      </Route>

      <Route element={<Layout displayLeftAside displayFooter />}>
        <Route path='/question/:questionId' element={<QuestionDetailPage />} />
        <Route element={<Protected />}>
          <Route
            path='/question/:questionId/edit'
            element={<QuestionEditPage />}
          />
          <Route path='/users' element={<UserProfilePage />} />
          <Route path='/users/edit' element={<UserEditPage />} />
          <Route path='/users/Delete' element={<UserDeletePage />} />
        </Route>
      </Route>

      <Route element={<Layout displayFooter />}>
        <Route element={<Protected />}>
          <Route path='/question/ask' element={<QuestionAskPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
