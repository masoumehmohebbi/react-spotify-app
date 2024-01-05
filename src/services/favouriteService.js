import http from "./httpService";

export function setFavourite(data) {
  return http.post("/songs/like/", data);
}

export function removetFavourite(data) {
  return http.post("/songs/unlike/", data);
}

export function getFavourites() {
  return http.get("/songs/favorites/");
}
