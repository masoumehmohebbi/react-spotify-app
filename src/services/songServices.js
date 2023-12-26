import http from "./httpService";

export function getSongs() {
  return http.get("/songs/");
}
