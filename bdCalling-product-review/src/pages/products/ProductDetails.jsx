import { useParams } from "react-router-dom";
import useSingleProduct from "../../hook/useSingleProduct";
import { Rating } from "@smastrom/react-rating";
import Container from "../../shaerd/Container";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, isLoading] = useSingleProduct(id);
  const {
    name,
    price,
    image,
    details,
    availability,
    specification,
    quantity,
    rating,
    category,
  } = product || {};
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <Container>
      <div>
        <div>
          <div className="card  card-compact bg-base-200 shadow-xl relative rounded">
            <figure>
              <img src={image} alt="Rooms_image" className="max-h-96 w-full" />
            </figure>
            <div className="card-body">
              <div className="lg:flex justify-between">
                <div>
                  <p className="text-xl absolute top-0 left-0 rounded-r-full bg-green-950 text-white px-3 py-1 ">
                    {" "}
                    $ {price}
                  </p>
                  <p className="text-xl absolute top-0 right-0 rounded-l-full bg-green-950 text-white px-3 py-1 ">
                    {" "}
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={parseFloat(Math.round(rating))}
                    />
                  </p>
                  <div className="space-y-1">
                    <p className="card-title">{name}</p>
                    <p className="text-lg">{details}</p>

                    <p className="text-xl">
                      <span className="font-medium">Category : </span>{" "}
                      {category}
                    </p>
                    <p className="text-xl">
                      <span className="font-medium">Specification : </span>{" "}
                      {specification}
                    </p>

                    {availability ? (
                      <p className="text-xl">
                        <span className="font-medium"> Availability : </span>{" "}
                        {quantity} Product Available
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
