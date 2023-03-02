// src/mocks/handlers.js
import { rest } from 'msw';
import {
  getMember,
  postLogin,
  postLogout,
  postSignup,
  deleteMember,
} from './resolvers/mockMember';
import {
  getQuestion,
  getQuestions,
  patchQuestions,
  postQuestions,
} from './resolvers/mockQuestions';

export const handlers = [
  rest.post('/members/login', postLogin),
  rest.post('/members/logout', postLogout),
  rest.post('/members', postSignup),
  rest.get('/members/mypage', getMember),
  rest.delete('/members', deleteMember),

  rest.get('/questions/:questionId', getQuestion),
  rest.get('/questions', getQuestions),
  rest.get('/questions/search', getQuestions),
  rest.post('/questions', postQuestions),
  rest.patch('/questions/:questionId', patchQuestions),
];
