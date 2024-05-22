import SectionBannerParallax from "../Shared/SectionBannerParallax/SectionBannerParallax";
import bannerImg from '../../assets//shop/banner2.jpg'
const Order = () => {
    return (
        <section>
            <SectionBannerParallax bannerTitle={'Order Now'} bannerDesc={'would you like to try a dish'} img={bannerImg}/>
           
        </section>
    );
};

export default Order;