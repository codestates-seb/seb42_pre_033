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
