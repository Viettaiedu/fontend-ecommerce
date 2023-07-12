import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";

// MY IMPORTS
import AnimationPage from "../../components/AnimationPage";
import Button from "../../components/Button";
import { sliders1, sliders2 } from "../../assets/sliders";
import promoBoxes from "../../assets/promoBox";
import ListProductSlide from "../../components/ListProductSlide";
import { IconFire } from "../../assets/icons";
import "./home.scss";
function Home() {
  return (
    <AnimationPage>
      <div className="home">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000 }}
          className="home__slider"
        >
          {sliders1.map((slider, idx) => (
            <SwiperSlide key={idx}>
              <Image src={slider} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container">
          <div className="promo-box row">
            {promoBoxes.map((item, idx) => (
              <div key={idx} className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div
                  className="promo-box__item"
                  style={{
                    backgroundColor: `${item.backgroundColor}`,
                  }}
                >
                  <div className="promo-box__item__left">
                    <Image src={item.image} />
                  </div>
                  <div className="promo-box__item__right">
                    <small>{item.textTop}</small>
                    <span>{item.textBot}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container my-4">
          <div className="section row">
            {sliders2.map((image, idx) => (
              <div
                key={idx}
                className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2"
              >
                <Image className="section__item" src={image} />
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="block-sale">
            <div className="block-sale__top">
              <span className="block-sale__top__left">
                <p>HOT SALE CUỐI TUẦN</p>
                <IconFire />
              </span>
              <span className="block-sale__top__right">
                <div className="block-sale__top__right__one">
                  <strong>167</strong>
                  <small>Ngày</small>
                </div>
                <div className="block-sale__top__right__one">
                  <strong>167</strong>
                  <small>Giờ</small>
                </div>
                <div className="block-sale__top__right__one">
                  <strong>167</strong>
                  <small>Phút</small>
                </div>
                <div className="block-sale__top__right__one">
                  <strong>167</strong>
                  <small>Giây</small>
                </div>
              </span>
            </div>
            <ListProductSlide />
            <div className="d-flex justify-content-center align-items-center pb-3">
              <Button classes="px-5 py-2" type="transparent">
                Xem tất cả
                <FontAwesomeIcon className="ms-2" icon={faAngleRight} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    
    </AnimationPage>
  );
}

export default Home;
