import http from "./httpService";

export function getSongs() {
  return http.get("/songs/");
}

export function getOneSong(id) {
  return http.get(`/songs/${id}`);
}

export function getPopularSongs() {
  return http.get("/songs/popular/");
}
