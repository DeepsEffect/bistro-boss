import { Button } from "@material-tailwind/react";
import useMenu from "../../../hooks/useMenu";

const MenuContent = () => {
  const [menu] = useMenu();
  return (
    <div>
      {/* menu content */}
      <section className="grid grid-cols-2 gap-4">
        {menu?.slice(0, 6).map((menuItem) => (
          <div key={menuItem._id}>
            {/* popular menu section */}
            <section className="flex items-center gap-4">
              {/* image  */}
              <div
                style={{ borderRadius: "0px 200px 200px 200px" }}
                className="w-[118px] h-[104px] bg-gray-200 "
              >
                <img src="" alt="" />
              </div>
              {/*     menu title */}
              <div>
                <h2>{menuItem.name} ------------------</h2>
                <p>{menuItem.recipe}</p>
              </div>
              {/*     price */}
              <div>
                <p className="text-orange-400">${menuItem.price}</p>
              </div>
            </section>
          </div>
        ))}
        {/*   button */}
        <Button
          style={{ borderRadius: "8px", borderBottom: "3px solid #1F2937" }}
          className="col-span-2 border-none w-[150px] mx-auto mt-4 bg-transparent text-black"
        >
          View full Menu
        </Button>
      </section>
    </div>
  );
};

export default MenuContent;
