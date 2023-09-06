import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Fragment } from "react";
import ProductItem from "../../components/ProductItem";
import { useMediaQuery } from "react-responsive";
import { Col, Row } from "react-bootstrap";
function CategoryProduct({
  products,
  listSubCategory = [
    "Iphone 14 series",
    "Iphone 14 series",
    "Iphone 14 series",
    "Iphone 14 series",
  ],
  title,
}) {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const createListProduct = () => {
    if (isTabletOrMobile) {
      return (
        <Swiper
          spaceBetween={25}
          slidesPerView={4}
          navigation={true}
          scrollbar={true}
          modules={[Navigation, Autoplay, Scrollbar]}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        >
          <SwiperSlide>
            <ProductItem product hiddenSold/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem product hiddenSold/>
          </SwiperSlide>
        </Swiper>
      );
    }
    return (
      <Row>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
        <Col lg={3}>
          <ProductItem product hiddenSold />
        </Col>
      </Row>
    );
  };
  return (
    <div className="container mt-5 categoryProduct">
      <h3 className=" text-uppercase mt-5 mt-3 text-center">{title}</h3>
      <div className="listSubcategory">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="me-2 d-none max-md-display icon "
        />
        <div className="d-flex justify-content-center align-items-center items">
          {listSubCategory.map((subCategory, index) => (
            <Fragment key={index}>
              <span className="item">{subCategory}</span>
              {index !== listSubCategory.length - 1 && (
                <small className="mx-2">/</small>
              )}
            </Fragment>
          ))}
        </div>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className="ms-2 d-none max-md-display icon "
        />
      </div>
      {createListProduct()}
    </div>
  );
}

export default CategoryProduct;
