import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useComments from "./useComments";
import { BiUserCircle } from "react-icons/bi";

export default function CommentSwiper() {
  const { data } = useComments();
  const allComments = data?.data?.results;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          961: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {allComments?.map((comment) => (
          <SwiperSlide
            key={comment.id}
            className="flex flex-col items-start p-5 bg-secondary-0 rounded-md"
          >
            {comment.comment}
            <hr className="h-1 w-full my-2" />
            <div className="flex items-center">
              <BiUserCircle className="w-7 h-7 text-primary-700" />
              <span className="mx-2 font-bold text-lg text-primary-600">
                {comment.user.first_name}
                &nbsp;
                {comment.user.last_name}
              </span>
            </div>
            <span className="flex justify-end w-full text-secondary-200">
              {formatDate(comment.created_at)}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
