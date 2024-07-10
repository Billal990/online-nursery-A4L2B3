import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
export default function CarouselSlider() {
  return (
   <div className="md:mt-[8.8rem]">
     <Carousel
    autoPlay
    >
      <div className="w-full md:h-[500px] h-[300px]">
        <img className="h-full w-full" src={banner1} />
      </div>
      <div className="w-full md:h-[500px] h-[300px]">
      <img className="h-full w-full" src={banner2} />
      </div>
      <div className="w-full md:h-[500px] h-[300px]">
      <img className="h-full w-full" src={banner3} />
      </div>
    </Carousel>
   </div>
  );
}
