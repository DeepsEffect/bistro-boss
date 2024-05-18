import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './styles.css'

import slide1 from "../../../../assets/home/slide1.jpg";
import slide2 from "../../../../assets/home/slide2.jpg";
import slide3 from "../../../../assets/home/slide3.jpg";
import slide4 from "../../../../assets/home/slide4.jpg";
import slide5 from "../../../../assets/home/slide5.jpg";

const OrderOnlineSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={slide1} alt="" />
          <h2 className=" absolute bottom-2 lg:bottom-4 left-0 right-0 lg:text-4xl text-white mx-auto uppercase">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className=" absolute bottom-2 lg:bottom-4 left-0 right-0 lg:text-4xl text-white mx-auto uppercase">Pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className=" absolute bottom-2 lg:bottom-4 left-0 right-0 lg:text-4xl text-white mx-auto uppercase">soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className=" absolute bottom-2 lg:bottom-4 left-0 right-0 lg:text-4xl text-white mx-auto uppercase">deserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className=" absolute bottom-2 lg:bottom-4 left-0 right-0 lg:text-4xl text-white mx-auto uppercase">Salads</h2>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OrderOnlineSwiper;
