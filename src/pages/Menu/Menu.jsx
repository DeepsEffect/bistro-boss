import SectionBannerParallax from "../Shared/SectionBannerParallax/SectionBannerParallax";
import bannerImg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import GetMenu from "../../components/GetMenu/GetMenu";
import MenuButton from "../../components/MenuButton/MenuButton";
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
const Menu = () => {
  const [menu] = useMenu();
  // console.log(menu);
  const offered = menu?.filter((item) => item.category === "offered");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  return (
    <div>
      {/* menu banner */}
      <SectionBannerParallax
        img={bannerImg}
        bannerTitle={"Our Menu"}
        bannerDesc={"Would You Like Do Try a Dish"}
      />
      {/* todays offer */}
      <section>
        {/* title */}
        <SectionTitle subHeading={"don't miss"} mainHeading={"today's offer"} />
        {/* menu item */}
        <GetMenu category={offered} />
        {/* button */}
        <MenuButton
          btnText={"open your favorite food"}
          btnLink={`/order/salad`}
        />
      </section>

      {/* Dessert */}
      <section className="space-y-10 mt-20">
        {/* section banner */}
        <SectionBannerParallax img={desertImg} bannerTitle={'Desert'} bannerDesc={'choose and enjoy our various categories of deserts'} />
        {/* menu item */}
        <GetMenu category={dessert} />
        {/* button */}
        <MenuButton
          btnText={"Order your favorite food"}
          btnLink={`/order/dessert`}
        />
      </section>

      {/* Pizza */}
      <section className="space-y-10 mt-20">
        {/* section banner */}
        <SectionBannerParallax img={desertImg} bannerTitle={'Pizza'} bannerDesc={'choose and enjoy our various categories of Pizzas'} />
        {/* menu item */}
        <GetMenu category={pizza} />
        {/* button */}
        <MenuButton
          btnText={"Order your favorite food"}
          btnLink={"/order/pizza"}
        />
      </section>

      {/* salad */}
      <section className="space-y-10 mt-20">
        {/* section banner */}
        <SectionBannerParallax img={saladImg} bannerTitle={'Salad'} bannerDesc={'choose and enjoy our various categories of Salads'} />
        {/* menu item */}
        <GetMenu category={salad} />
        {/* button */}
        <MenuButton
          btnText={"Order your favorite food"}
          btnLink={"/order/salad"}
        />
      </section>

      {/* soup */}
      <section className="space-y-10 mt-20">
        {/* section banner */}
        <SectionBannerParallax img={soupImg} bannerTitle={'Soup'} bannerDesc={'choose and enjoy our various categories of Soups'} />
        {/* menu item */}
        <GetMenu category={soup} />
        {/* button */}
        <MenuButton
          btnText={"Order your favorite food"}
          btnLink={"/order/soup"}
        />
      </section>

    </div>
  );
};

export default Menu;
