import useMenu from "../../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import MenuButton from "../../../components/MenuButton/MenuButton";

const MenuContent = () => {
  const [menu] = useMenu();
  return (
    <div>
      {/* menu content */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {menu?.slice(0, 6).map((menuItem) => (
          <MenuCategory key={menuItem._id} menuItem={menuItem} />
        ))}
      </section>
      {/*   button */}
      <MenuButton btnText={"View all menu"} />
    </div>
  );
};

export default MenuContent;
