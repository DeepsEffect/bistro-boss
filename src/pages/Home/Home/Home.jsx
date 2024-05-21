import Banner from "../Banner/Banner";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
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
        <FromOurMenu />
      </section>
    </div>
  );
};

export default Home;
