/* eslint-disable react/prop-types */

const MenuCategory = ({ menuItem }) => {
  return (
    <>
      <div key={menuItem._id}>
        {/* popular menu section */}
        <section className="flex items-center just gap-4">
          {/* image  */}
          <div
            style={{ borderRadius: "0px 200px 200px 200px", overflow:"hidden" }}
            className="w-[118px] h-[104px] bg-gray-200 flex-shrink-0"
          >
            <img
              className="w-full h-full object-cover "
              src={menuItem.image}
              alt=""
            />
          </div>
          {/*     menu title */}
          <div className="flex-grow">
            <h2 className="text-xl font-semibold">{menuItem.name} ------------------</h2>
            <p className="text-gray-600">{menuItem.recipe}</p>
          </div>
          {/*     price */}
          <div className="flex-shrink-0">
            <p className="text-orange-400 font-semibold">${menuItem.price}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MenuCategory;
