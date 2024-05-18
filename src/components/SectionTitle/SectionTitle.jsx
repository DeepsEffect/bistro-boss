/* eslint-disable react/prop-types */
const SectionTitle = ({ subHeading, mainHeading }) => {
  return (
    <div className="mx-auto max-w-md text-center my-6">
      <p className="text-amber-600 py-2">---{subHeading}---</p>
      <h2 className="text-2xl uppercase border-y-2 py-2">{mainHeading}</h2>
    </div>
  );
};

export default SectionTitle;
