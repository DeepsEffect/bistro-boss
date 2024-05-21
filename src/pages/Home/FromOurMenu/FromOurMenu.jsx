import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuContent from "../../Shared/MenuContent/MenuContent";

const FromOurMenu = () => {
  return (
    <div>
      {/* title section */}
      <section>
        <SectionTitle
          subHeading={"Check it out"}
          mainHeading={"from our menu"}
        />
      </section>
      {/* menu content */}
      <MenuContent />
    </div>
  );
};

export default FromOurMenu;
