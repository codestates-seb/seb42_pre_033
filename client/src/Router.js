import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './components/Login/Login';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import AskQuestionPage from './pages/AskQuestionPage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import QuestionEditPage from './pages/QuestionEditPage';
import UserProfilePage from './pages/UserProfilePage';
import UserEditPage from './pages/UserEditPage';
import UserDeletePage from './pages/UserDeletePage';
import ErrorPage from './pages/ErrorPage';

function Router() {
  return (
    <Routes>
      <Route element={<Layout fullWidth />}>
        <Route path='/login' element={<Login />} />
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
        <Route path='/questions' element={<HomePage />} />
      </Route>

      <Route element={<Layout displayLeftAside displayFooter />}>
        <Route path='/question/:questionId' element={<QuestionDetailPage />} />
        <Route
          path='/question/:questionId/edit'
          element={<QuestionEditPage />}
        />
        <Route path='/users' element={<UserProfilePage />} />
        <Route path='/users/edit' element={<UserEditPage />} />
        <Route path='/users/Delete' element={<UserDeletePage />} />
      </Route>

      <Route element={<Layout displayFooter />}>
        <Route path='/question/ask' element={<AskQuestionPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
