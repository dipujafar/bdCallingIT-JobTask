/* eslint-disable react/prop-types */

const Container = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto lg:px-16 md:px-8  px-4">
      {children}
    </div>
  );
};

export default Container;
