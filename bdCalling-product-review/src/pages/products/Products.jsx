import useProducts from "../../hook/useProducts";

const Products = () => {
  const [products, isLoading] = useProducts();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-green-600"></span>
      </div>
    );
  }
  return <div>{products.length}</div>;
};

export default Products;
