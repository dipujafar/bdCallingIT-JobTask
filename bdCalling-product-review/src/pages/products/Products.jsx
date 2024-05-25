import useProducts from "../../hook/useProducts";
import Container from "../../shaerd/Container";
import bgImage from "../../assets/image/pattrenBgImage.jpg";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";

const Products = () => {
  const [sort, setSort] = useState("");
  const { filter, setFilter } = useAuth();
  console.log(filter);
  const [products, isLoading, refetch] = useProducts(sort, filter);

  useEffect(() => {
    refetch(sort, filter);
  }, [refetch, sort, filter]);

  let sortData = ["High to Low", "Low to High"];
  let categoryData = [
    "All",
    "Natural Plants",
    "Artificial Plants",
    "Plant Accessories",
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-green-600"></span>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>GREENMIND | Products</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-[50vh] w-full rounded-br-full mb-5"
      >
        <Container>
          <h1 className="text-7xl font-medium  pt-20">
            Your Dream Plants Products
          </h1>
        </Container>
      </div>
      <div>
        <Container>
          {/* data filtering */}

          <div className="flex justify-between">
            {/* sort by price */}
            <div className="flex gap-2">
              <p className="font-medium">Sort by Price :</p>
              <select
                onChange={(e) => {
                  setSort(
                    sortData.find((val) => val == e.target.value).split(" ")[0]
                  );
                }}
                className="border border-black px-1 rounded"
              >
                <option disabled>Select Range</option>
                {sortData.map((item) => {
                  return (
                    <>
                      <option value={item} key={item}>
                        {item}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            {/* filter by category */}
            <div className="flex gap-2">
              <p className="font-medium">Filter by Price :</p>
              <select
                onChange={(e) => {
                  setFilter(categoryData.find((val) => val == e.target.value));
                }}
                className="border border-black px-1 rounded"
              >
                <option disabled>Select Range</option>
                {categoryData.map((item) => {
                  return (
                    <>
                      <option value={item} key={item}>
                        {item}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>

          {/* product show */}
          <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products?.length &&
              products.map((product) => (
                <Link
                  to={`/product/${product?._id}`}
                  key={product?._id}
                  className="card  bg-base-200 shadow-xl"
                >
                  <figure className="px-10 pt-10">
                    <img
                      src={product?.image}
                      alt="productImage"
                      className="rounded-xl w-full h-56"
                    />
                    <p className="absolute bg-slate-700 text-white py-1 font-medium rounded px-2 top-4 right-8">
                      ${product?.price}
                    </p>
                    <p className="absolute bg-slate-700 text-white py-1 font-medium rounded px-2 top-4 left-8">
                      {product?.category}
                    </p>
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{product?.name}</h2>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={parseFloat(Math.round(product?.rating))}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Products;
