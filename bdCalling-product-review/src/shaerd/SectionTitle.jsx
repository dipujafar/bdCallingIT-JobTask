/* eslint-disable react/prop-types */

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-1/2 mx-auto text-center  my-5">
      <h1 className="text-3xl font-bold  py-1 ">{heading}</h1>
      <p className="text-lg  mt-2">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
