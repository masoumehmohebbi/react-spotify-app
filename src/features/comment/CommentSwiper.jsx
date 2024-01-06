import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useComments from "./useComments";
import { BiUserCircle } from "react-icons/bi";
import * as shamsi from "shamsi-date-converter";
import formatDate from "../../utils/formatDate";

export default function CommentSwiper() {
  const { data } = useComments();
  const allComments = data?.data?.results;

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
            <span
              dir="ltr"
              className="flex justify-start text-sm w-full text-secondary-200"
            >
              {shamsi
                .gregorianToJalali(formatDate(comment.created_at))
                .join(" / ")}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
