import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/Swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Header = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="https://cdn.stocksnap.io/img-thumbs/960w/fall-hiking_XRT4FEBBR8.jpg"
              alt=""
            />
            <div className="slide-text">Beautiful Fall Hiking</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="https://cdn.stocksnap.io/img-thumbs/960w/Lake-Mountains_VZBJUVPO25.jpg"
              alt=""
            />
            <div className="slide-text">Lake and Mountains</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="https://cdn.stocksnap.io/img-thumbs/960w/enchanting-forest_1CFKSWRR5X.jpg"
              alt=""
            />
            <div className="slide-text">Enchanting Forest</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="https://cdn.stocksnap.io/img-thumbs/960w/sunflowers-farm_MTDPG5UVK0.jpg"
              alt=""
            />
            <div className="slide-text">Sunflower Fields</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="https://cdn.stocksnap.io/img-thumbs/960w/aerial-foliage_QYUBUTYRG9.jpg"
              alt=""
            />
            <div className="slide-text">Aerial Foliage View</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Header;
