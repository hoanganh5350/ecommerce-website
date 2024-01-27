import { useState,useEffect } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

const useWidth = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return width;
  };

const Intro1 = () => {
    return (
        <div style={{marginBottom:"50px"}}>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={true}
                navigation={{
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
                style={{height:useWidth()>500?"430px":"280px"}}
            >
                <SwiperSlide>
                    <div
                        className="single-hero-slider single-animation-wrap"
                        style={{
                            backgroundImage:
                                "url(assets/imgs/slider/slider-1.png)",
                            height:useWidth()>500?"430px":"280px"
                        }}
                    >
                        <div className="slider-content">
                            <h4 className="display-2 mb-40">
                                Đừng bỏ lỡ
                                <br />
                                Khuyến mãi sốc
                            </h4>
                            <p className="mb-65">
                                Đăng nhập để nhận thông tin mới nhất    
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-hero-slider single-animation-wrap"
                        style={{
                            backgroundImage:
                                "url(assets/imgs/slider/slider-2.png)",
                            height:useWidth()>500?"430px":"280px"
                        }}
                    >
                        <div className="slider-content">
                            <h1 className="display-2 mb-40">
                                Rau củ sạch
                                <br />
                                Giá ưu đãi nhất
                            </h1>
                            <p className="mb-65">
                                Giảm giá 50% cho đơn hàng đầu tiên
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i1">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
        </div>
    );
};

export default Intro1;
