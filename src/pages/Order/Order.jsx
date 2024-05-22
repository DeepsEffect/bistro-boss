import SectionBannerParallax from "../Shared/SectionBannerParallax/SectionBannerParallax";
import bannerImg from "../../assets//shop/banner2.jpg";
import { Tabs } from "react-tabs";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import useMenu from "../../hooks/useMenu";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
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
            <h2>pizza</h2>
          </TabPanel>
          <TabPanel>
            <h2>soup</h2>
          </TabPanel>
          <TabPanel>
            <h2>dessert</h2>
          </TabPanel>
          <TabPanel>
            <h2>drinks</h2>
          </TabPanel>
        </Tabs>
      </section>
    </section>
  );
};

export default Order;
