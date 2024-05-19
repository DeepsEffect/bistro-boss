import Banner from "../Banner/Banner";
import MenuParallax from "../MenuParallax/MenuParallax";
import OrderOnline from "../OrderOnline/OrderOnline";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* body section */}
      <section className="container mx-auto">
        <OrderOnline />
        <MenuParallax />
      </section>
    </div>
  );
};

export default Home;
