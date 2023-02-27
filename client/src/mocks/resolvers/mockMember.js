// src/mocks/handlers.js

export const postLogin = async (req, res, ctx) => {
  const { email, password } = await req.json();

  if (!email || !password || email !== 'wjdwjdtn92@naver.com') {
    return res(ctx.status(401));
  }

  return res(
    // Respond with a 200 status code
    ctx.headers.set(
      'Authorization',
      'Bearer aiwu4e8237918279awoieZKLwje129039182',
    ),
    ctx.headers.set('Refesh', 'aiwu4e8237918279awoieZKLwje129039182'),
    ctx.status(200),
    ctx.json({
      message: '정상적으로 로그인 되었습니다.',
    }),
  );
};

export const postLogout = (req, res, ctx) => {
  // Check if the user is authenticated in this session
  const isAuthenticated = req.headers.getItem('Authorization');

  if (!isAuthenticated) {
    // If not authenticated, respond with a 403 error
    return res(
      ctx.status(403),
      ctx.json({
        message: 'Not authorized',
      }),
    );
  }

  // If authenticated, return a mocked user details
  return res(
    ctx.status(200),
    ctx.json({
      message: '정상적으로 로그아웃 되었습니다.',
    }),
  );
};

export const postSignup = async (req, res, ctx) => {
  // Check if the user is authenticated in this session
  const { email, password, nickname } = await req.json();

  if (email === 'wjdwjdtn92@naver.com') {
    return res(
      ctx.status(409),
      ctx.json({
        message: '이미 존재하는 회원 입니다.',
      }),
    );
  }
  if (email.length === 0 || password.length < 4 || nickname.length === 0) {
    // If not authenticated, respond with a 403 error
    return res(
      ctx.status(400),
      ctx.json({
        message: 'validate error',
      }),
    );
  }

  // If authenticated, return a mocked user details
  return res(
    ctx.status(201),
    ctx.json({
      message: '정상적으로 회원가입 되었습니다.',
    }),
  );
};

export const getMember = (req, res, ctx) => {
  // Check if the user is authenticated in this session
  const isAuthenticated = req.headers.getItem('Authorization');

  if (!isAuthenticated) {
    // If not authenticated, respond with a 403 error
    return res(
      ctx.status(403),
      ctx.json({
        message: 'Not authorized (로그인 필요)',
      }),
    );
  }

  // If authenticated, return a mocked user details
  return res(
    ctx.status(200),
    ctx.json({
      memberId: '1',
      email: 'wjdwjdtn92@naver.com',
      nickname: 'jjs',
      createDate: '저장된 회원 생성 날짜',
      memberStatus: '활동중',
      questionResponseDtos: [
        {
          questionId: '1',
          title: '저장된 title',
          content: '저장된 content',
          createDate: '저장된 질문 생성 날짜',
          score: '저장된 score',
          viewCnt: '저장된 viewCnt',
        },
      ],
      answerResponseDtos: [
        {
          answerId: '1',
          answerContent: '저장된 content',
          questionId: '저장된 답변을한 질문 id',
          questionTitle: '저장된 답변을 한 질문 Title',
          createDate: '저장된 답변 생성 날짜',
          score: '저장된 score',
          isAccepted: '저장된 Accepted',
        },
      ],
    }),
  );
};

export const pathchMember = (req, res, ctx) => {
  // Check if the user is authenticated in this session
  const isAuthenticated = req.headers.getItem('Authorization');

  if (!isAuthenticated) {
    // If not authenticated, respond with a 403 error
    return res(
      ctx.status(403),
      ctx.json({
        message: 'Not authorized',
      }),
    );
  }

  // If authenticated, return a mocked user details
  return res(
    ctx.status(200),
    ctx.json({
      message: '정상적으로 수정되었습니다.',
    }),
  );
};

export const deleteMember = (req, res, ctx) => {
  // Check if the user is authenticated in this session
  const isAuthenticated = req.headers.getItem('Authorization');

  if (!isAuthenticated) {
    // If not authenticated, respond with a 403 error
    return res(
      ctx.status(403),
      ctx.json({
        message: 'Not authorized',
      }),
    );
  }

  // If authenticated, return a mocked user details
  return res(
    ctx.status(200),
    ctx.json({
      message: '정상적으로 수정되었습니다.',
    }),
  );
};
