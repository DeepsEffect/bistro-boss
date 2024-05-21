/* eslint-disable react/prop-types */
import MenuCategory from "../../pages/Shared/MenuContent/MenuCategory";

const GetMenu = ({ category }) => {
  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto">
        {category?.map((menuItem) => (
          <MenuCategory key={menuItem._id} menuItem={menuItem} />
        ))}
      </section>
    </div>
  );
};

export default GetMenu;
