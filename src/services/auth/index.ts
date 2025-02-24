import { createData, type ErrorType, type SuccessReponse } from '..'

const endpoints = {
  authenticate: 'identity/v1/account/authenticate',
  refreshTokens: 'identity/v1/account/refresh-jwt-tokens',
  logout: 'identity/v1/account/logout',
  getAllOrganizations: 'identity/v1/account/organizations/all',
  updateOrganization: 'identity/v1/account/organizations',
}

export const loginUser = (data: unknown) =>
  createData<SuccessReponse<200, {}> | ErrorType>(endpoints.authenticate, data)

// export function refreshToken(data) {
//   return window.axios
//     .post("/identity/v1/account/refresh-jwt-tokens", data)
//     .then((response) => response.data)
//     .catch(() => null);
// }

// export function logOut() {
//   return window.axios.post("/identity/v1/account/logout");
// }

// export function getAllMyOrganizations() {
//   return window.axios
//     .get(`/identity/v1/account/organizations/all`)
//     .then((response) => response.data);
// }

// export function updateMyCurrentOrganization(data) {
//   return window.axios
//     .patch(`/identity/v1/account/organizations`, data)
//     .then((response) => response.data);
// }
