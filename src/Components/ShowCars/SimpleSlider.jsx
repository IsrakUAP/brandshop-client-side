import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div >
                        <img className="h-[400px] w-full" src="https://img.freepik.com/premium-psd/car-web-banner-template-horizontal-social-media-facebook-cover-post-advertising-template-design_567310-656.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-[400px] w-full" src="https://img.freepik.com/premium-vector/car-rent-facebook-cover-banner-template_544391-409.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-[400px] w-full" src="https://img.freepik.com/premium-vector/luxury-car-rent-social-media-post-banner-template_544391-197.jpg" alt="" />
                    </div>

                </Slider>
            </div>
        );
    }
}