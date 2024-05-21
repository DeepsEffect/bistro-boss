import SectionBannerParallax from "../Shared/SectionBannerParallax/SectionBannerParallax";
import bannerImg from '../../assets/menu/banner3.jpg'
const Menu = () => {
    return (
        <div>
            <SectionBannerParallax img={bannerImg} bannerTitle={'Our Menu'} bannerDesc={'Would You Like Do Try a Dish'} />
        </div>
    );
};

export default Menu;