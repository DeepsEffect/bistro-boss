import { Button } from "@material-tailwind/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { Card, Typography } from "@material-tailwind/react";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosCommon = useAxiosCommon();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const TABLE_HEAD = ["", "Item Name", "Price", "Action"];

  const handleDelete = (_id) => {
    console.log(_id);
    axiosCommon.delete(`/cart/${_id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        refetch();
      }
    });
  };
  return (
    <div>
      <SectionTitle subHeading={"my cart"} mainHeading={"wanna add more?"} />
      <div className="flex justify-evenly font-bold text-xl">
        <h2>Total Orders: {cart?.length}</h2>
        <h2>Total Price: {totalPrice}</h2>
        <Button color="green" size="sm">
          Pay
        </Button>
      </div>
      <Card className="h-full w-full overflow-scroll mt-10">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cart.map(({ _id, name, price }, index) => {
              const isLast = index === cart.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <Button
                        onClick={() => handleDelete(_id)}
                        color="red"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Cart;
