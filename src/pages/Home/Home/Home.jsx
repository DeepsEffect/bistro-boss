import SectionBannerParallax from "../../Shared/SectionBannerParallax/SectionBannerParallax";
import Banner from "../Banner/Banner";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import OrderOnline from "../OrderOnline/OrderOnline";
import bannerImg from "../../../assets/home/banner.jpg";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* body section */}
      <section className="container mx-auto">
        <OrderOnline />
        <SectionBannerParallax
          img={bannerImg}
          bannerTitle={"Bistro Boss"}
          bannerDesc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
          }
        />
        <FromOurMenu />
      </section>
    </div>
  );
};

export default Home;
