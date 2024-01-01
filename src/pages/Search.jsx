import { useTranslation } from "react-i18next";
import Navbar from "../ui/Navbar";
import { BiSearch } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import useSongs from "../features/PlayList/useSongs";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [serchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { data } = useSongs();
  const allSongs = data?.data?.results;
  const [filterAllSongs, setFilterAllSongs] = useState([]);

  useEffect(() => {
    setFilterAllSongs(allSongs);
  }, [allSongs]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    const filteredSongs = filterAllSongs.filter(
      (song) =>
        song.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        song.artist.fullname
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        song.genre.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    if (!e.target.value == "") {
      setFilterAllSongs(filteredSongs);
    } else {
      setFilterAllSongs(allSongs);
    }
  };
  return (
    <>
      <Navbar>
        <div className="hidden md:block rounded-[500px] md:max-w-[12rem] lg:max-w-md xl:max-w-xl focus-within:border-secondary-0 border-primary-600 border-2 duration-300 w-full">
          <div className="justify-between px-3 flex bg-primary-600 items-center rounded-[500px]">
            <SearchField onChange={handleSearch} serchInput={serchInput} />
          </div>
        </div>
      </Navbar>

      <div className="grid grid-cols-4 pb-16 gap-5">
        {filterAllSongs?.map((song) => (
          <div
            onClick={() => navigate(`/playlist-song-detail/${song.id}`)}
            key={song.id}
            className=" group w-48 md:w-auto bg-primary-500 hover:bg-primary-700 shadow-md rounded-md p-5 cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img className="rounded-md" src={song.cover_image} />
              <p className="absolute right-0 top-0 p-2 font-bold text-primary-800 text-xl w-full h-full bg-secondary-50 bg-opacity-50">
                {song.name} <br /> {song.genre.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;

export function SearchField({ onChange, serchInput }) {
  const searchFieldRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    searchFieldRef.current.focus();
  }, []);

  return (
    <>
      <input
        value={serchInput}
        onChange={onChange}
        ref={searchFieldRef}
        className="py-2 md:py-3 px-3 w-full bg-transparent outline-none "
        type="text"
        placeholder={t("what_to_listen")}
      />
      <BiSearch className="text-2xl text-primary-50 " />
    </>
  );
}
