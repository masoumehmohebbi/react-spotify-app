import http from "./httpService";

export function sendComments({ data }) {
  return http.post("/review/", data);
}

export function getComments() {
  return http.get("/review/");
}
