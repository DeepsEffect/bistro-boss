import SectionBannerParallax from "../Shared/SectionBannerParallax/SectionBannerParallax";
import bannerImg from "../../assets//shop/banner2.jpg";
import { Tabs } from "react-tabs";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import useMenu from "../../hooks/useMenu";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");

  return (
    <section>
      <SectionBannerParallax
        bannerTitle={"Order Now"}
        bannerDesc={"would you like to try a dish"}
        img={bannerImg}
      />
      {/* tabs */}
      <section className="my-10 container mx-auto ">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
              {salad?.map((s) => (
                <FoodCard key={s._id} items={s} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
              {pizza?.map((s) => (
                <FoodCard key={s._id} items={s} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
              {soup?.map((s) => (
                <FoodCard key={s._id} items={s} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
              {dessert?.map((s) => (
                <FoodCard key={s._id} items={s} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>drinks coming soon...</h2>
          </TabPanel>
        </Tabs>
      </section>
    </section>
  );
};

export default Order;
