import { QUESTIONS } from '../data/QuestionDummy';

export const getQuestion = async (req, res, ctx) => {
  const { questionId } = req.params;

  const data = QUESTIONS.filter(
    (question) => question.questionId === Number(questionId),
  );

  return res(
    // Respond with a 200 status code
    ctx.status(200),
    ctx.json(data[0]),
  );
};

export const getQuestions = async (req, res, ctx) => {
  const query = req.url.searchParams.get('q');

  const data = query
    ? QUESTIONS.filter((question) => question.title.includes(query))
    : QUESTIONS;

  return res(
    // Respond with a 200 status code
    ctx.status(200),
    ctx.json({
      questions: data,
    }),
  );
};

export const postQuestions = async (req, res, ctx) => {
  // Check if the user is authenticated in this session
  const isAuthenticated = req.headers.getItem('Authorization');
  const { title, content } = await req.json();

  if (!isAuthenticated) {
    // If not authenticated, respond with a 403 error
    return res(
      ctx.status(403),
      ctx.json({
        message: 'Not authorized',
      }),
    );
  }

  if (title.length === 0 || content.length === 0) {
    return res(
      ctx.status(400),
      ctx.json({
        message: 'validator error',
      }),
    );
  }

  // If authenticated, return a mocked user details
  return res(
    ctx.status(201),
    ctx.json({
      questionId: crypto.randomUUID(),
      nickname: 'wjdwjdtn92',
      title: title,
      content: content,
      createDate: new Date().toISOString(),
      viewCnt: 0,
      score: 0,
    }),
  );
};

export const patchQuestions = async (req, res, ctx) => {
  // Check if the user is authenticated in this session
  const isAuthenticated = req.headers.getItem('Authorization');
  const { questionId } = req.params;

  const { title, content } = await req.json();

  if (!isAuthenticated) {
    // If not authenticated, respond with a 403 error
    return res(
      ctx.status(403),
      ctx.json({
        message: 'Not authorized',
      }),
    );
  }

  if (title.length === 0 || content.length === 0) {
    return res(
      ctx.status(400),
      ctx.json({
        message: 'validator error',
      }),
    );
  }

  // If authenticated, return a mocked user details
  return res(
    ctx.status(200),
    ctx.json({
      questionId: questionId,
      nickname: 'wjdwjdtn92',
      title: title,
      content: content,
      createDate: new Date().toISOString(),
      viewCnt: 0,
      score: 0,
    }),
  );
};
