import useFavourites from "../features/favourites/useFavourites";
import { useNavigate } from "react-router-dom";
import { useSelectedSongFavourite } from "../features/favourites/FavouritesContext";
import Navbar from "./Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useUser from "../features/PlayList/useUser";

export function Library() {
  const userData = useUser();
  const userProfile = userData?.data?.data;
  const { setSelectedId } = useSelectedSongFavourite();
  const navigate = useNavigate();
  const { data } = useFavourites();
  const allFavSongs = data?.data?.results;

  const favouriteSongHandler = (id) => {
    navigate(`/playlist-song-detail/${id}`);
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="mb-11 md:mb-0">
      <div className="md:hidden">
        <Navbar />
      </div>

      {!userProfile ? (
        <li className="bg-primary-600 text-secondary-50 p-3 m-5 font-semibold shadow-md rounded flex gap-6 ">
          برای دیدن این بخش باید وارد حساب کاربری خود شوید
        </li>
      ) : (
        <ul className="flex flex-col gap-3 md:gap-y-0 px-5 md:px-0 mt-4 md:mt-0">
          {allFavSongs?.length === 0 ? (
            <li className="bg-primary-600 font-semibold shadow-md rounded p-3 flex gap-6 ">
              هنوز هیچ آهنگی لایک نکرده اید
            </li>
          ) : (
            allFavSongs?.map((item) => (
              <li
                onClick={() => favouriteSongHandler(item.id)}
                key={item.id}
                className="bg-primary-600 cursor-pointer shadow-md rounded p-3 flex gap-6 "
              >
                <LazyLoadImage
                  effect="blur"
                  className="w-16 h-16 rounded-md"
                  src={item.cover_image}
                  alt={item.name}
                />
                <div className="flex flex-col">
                  <span className="text-secondary-0 font-bold">
                    {item.name}
                  </span>
                  <span className="text-secondary-50">
                    {item.artist.fullname}
                  </span>
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
