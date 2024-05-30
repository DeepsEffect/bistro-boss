/* eslint-disable react/prop-types */
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useCart from "../../hooks/useCart";

const FoodCard = ({ items }) => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const [, refetch] = useCart();

  const handleAddToCart = (food) => {
    console.log(food, user?.email);
    if (user && user.email) {
      // send user to the database
      const cartItem = {
        menuId: items._id,
        email: user.email,
        name: items.name,
        image: items.image,
        price: items.price,
      };
      // console.log(cartItem);
      axiosCommon.post("/cart", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert("item added to cart");
          refetch();
        }
      });
    } else {
      alert("login to add cart item");
    }
  };
  return (
    <div className="flex items-center justify-center from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3]">
      <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <div
            className="h-[236px]"
            style={{
              backgroundImage: `url(${items.image})`,
              backgroundRepeat: "no-repeat",
              boxSizing: "border-box",
              objectFit: "cover",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="p-4 sm:p-6">
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              {items.name}
            </p>
            <div className="flex flex-row">
              <p className="text-[17px] font-bold text-[#0FB478]">
                price: {items.price}
              </p>
            </div>
            <p className="text-[#7C7C80] font-[15px] mt-6">{items.recipe}</p>
            <span
              onClick={() => handleAddToCart(items)}
              className="block cursor-pointer mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
