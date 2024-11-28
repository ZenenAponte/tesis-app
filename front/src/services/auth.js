import axios from './axios'

export const LoginRequest = (user) => {
  return axios.post(`/autenticar/login`, user);
};

export const LogoutRequest = () => {
  return axios.post(`/logout`)
}

export const verifyTokenRequest = async () => axios.get(`/autenticar/verify`);