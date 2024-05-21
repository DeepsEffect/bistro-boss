import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import OrderOnlineSwiper from "./OrderOnlineSwiper/OrderOnlineSwiper";

const OrderOnline = () => {
  return (
    <div className="mb-10">
      {/*section title */}
      <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        mainHeading="order online"
      />
      <OrderOnlineSwiper />
    </div>
  );
};

export default OrderOnline;
