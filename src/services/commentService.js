import http from "./httpService";

export function sendComments(data) {
  return http.post("/review/create/", data);
}

export function getComments() {
  return http.get("/review/");
}
