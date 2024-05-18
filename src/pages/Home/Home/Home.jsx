import Banner from "../Banner/Banner";
import OrderOnline from "../OrderOnline/OrderOnline";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* body section */}
      <section className="container mx-auto">
        <OrderOnline />
      </section>
    </div>
  );
};

export default Home;
