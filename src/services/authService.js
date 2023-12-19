import http from "./httpService";

export function registerUser(data) {
  return http.post("/auth/register/", data);
}

export function getOtp(data) {
  return http.post("/auth/otp/send/", data);
}

export function checkOtp(data) {
  return http.post("/auth/otp/check", data);
}
