import http from "./httpService";

export function registerUser(data) {
  return http.post("/auth/register/", data);
}
export function getOtp(data) {
  return http.post("/auth/otp/send/", data);
}
export function checkOtp(data) {
  return http.post("/auth/otp/check/", data);
}
export function getUser() {
  return http.get("/auth/profile/");
}

export function getTokens(data) {
  return http.post("/auth/token/", data);
}
export function getRefreshToken(data) {
  return http.post("/auth/token/refresh/", data);
}
