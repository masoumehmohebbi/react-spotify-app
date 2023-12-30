import http from "./httpService";

export function getSongs() {
  return http.get("/songs/public/");
}
export function getOneSong(id) {
  return http.get(`/songs/${id}`);
}
