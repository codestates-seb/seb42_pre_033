import axios from 'axios';

const BASE_URL = '/api';

export async function postSignup({ email, password, nickname }) {
  const { data, status } = await axios({
    method: 'post',
    url: `${BASE_URL}/members/signup`,
    data: { email, password, nickname },
  })
    .then(({ data, status }) => {
      return { data, status };
    })
    .catch(({ response }) => {
      console.log(response);
      return { data: response.data, status: response.status };
    });

  return { data, status };
}

export async function postQuestion({
  title,
  content,
  accessToken,
  refreshToken,
}) {
  const { data, status } = await axios({
    method: 'post',
    url: `${BASE_URL}/questions`,
    data: { title, content },
    headers: {
      authorization: accessToken,
      refresh: refreshToken,
    },
  })
    .then(({ data, status }) => {
      return { data, status };
    })
    .catch(({ response }) => {
      return { data: response.data, status: response.status };
    });

  return { data, status };
}

export async function postAnswer({
  questionId,
  content,
  accessToken,
  refreshToken,
}) {
  return await axios({
    method: 'post',
    url: `${BASE_URL}/answers/${questionId}`,
    data: {
      answerContent: content,
    },
    headers: {
      authorization: accessToken,
      refresh: refreshToken,
    },
  })
    .then(({ data, status }) => {
      return { data, status };
    })
    .catch(({ response, ...rest }) => {
      console.log(rest);
      return { data: response.data, status: response.status };
    });
}

export async function getAnswer(questionId) {
  return await axios({
    method: 'get',
    url: `${BASE_URL}/questions/${questionId}`,
    headers: 'ngrok-skip-browser-warning: "12"',
  })
    .then(({ data, status }) => {
      return { data, status };
    })
    .catch(({ response }) => {
      return { data: response.data, status: response.status };
    });
}

export async function patchQuestion({
  title,
  content,
  questionId,
  accessToken,
  refreshToken,
}) {
  return await axios({
    method: 'patch',
    url: `${BASE_URL}/questions/${questionId}`,
    data: { title, content },
    headers: {
      authorization: accessToken,
      refresh: refreshToken,
    },
  })
    .then(({ data, status }) => {
      return { data, status };
    })
    .catch(({ response }) => {
      return { data: response.data, status: response.status };
    });
}
