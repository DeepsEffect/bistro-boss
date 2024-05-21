/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MenuButton = ({btnText, btnLink}) => {
  return (
    <div>
      <Link className="col-span-2" to={btnLink}>
        <Button
          style={{ borderRadius: "8px", borderBottom: "3px solid #1F2937" }}
          className="flex mx-auto mt-4 bg-transparent text-black"
        >
          {btnText}
        </Button>
      </Link>
    </div>
  );
};

export default MenuButton;
