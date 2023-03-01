import axios from 'axios';

const BASE_URL = '/api';

export async function postSignup({ email, password, nickname }) {
  const { data, status } = axios({
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
