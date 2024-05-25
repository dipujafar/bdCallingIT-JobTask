import useProducts from "../../hook/useProducts";
import Container from "../../shaerd/Container";
import bgImage from "../../assets/image/pattrenBgImage.jpg";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const [products, isLoading] = useProducts();

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
        className="h-[50vh] w-full rounded-br-full"
      >
        <Container>
          <h1 className="text-7xl font-medium  pt-20">
            Your Dream Plants Products
          </h1>
        </Container>
      </div>
      <div>
        <Container>
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
                      ${product?.price} per kg
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
