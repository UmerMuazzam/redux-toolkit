import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const SwipperSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log()}
            onSwiper={(swiper) => console.log()}
        >

            <SwiperSlide> <img style={{ width: '80rem', height: '26rem', objectFit: 'cover' }} src='https://media.drive.com.au/obj/tx_q:50,rs:auto:1600:900:1/driveau/upload/cms/uploads/uzwwmw6qi9cemvcukaih' /> </SwiperSlide>
            <SwiperSlide> <img style={{ width: '80rem', height: '26rem', objectFit: 'cover' }} src='https://www.puzzel.com/hubfs/4%20ways%20to%20enhance%20client%20experience%20in%20Financial%20Services%20.png' /> </SwiperSlide>

           
        </Swiper>
    )
}

export default SwipperSlider
