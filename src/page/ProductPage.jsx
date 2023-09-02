import { X } from "lucide-react";
import useProduct from "../hooks/useProduct";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { pid } = useParams();
  const { loading, error, data } = useProduct(pid);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const product = data.getProductById;
  const onClose = () => {
    window.history.back();
  };
  return (
    <div className="mx-auto max-w-7xl mb-6">
      <div className="bg-white px-8 py-6 mt-6 rounded-xl mx-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <div className="flex items-center gap-x-1">
            <X
              className="h-12 w-12 p-2 bg-main text-black cursor-pointer rounded-md"
              onClick={onClose}
            />
            <div className="h-12 w-18 px-6 py-4 bg-secondary text-xs text-center  text-white  rounded-md">
              <p>${product.prices?.original_price / 100}</p>
            </div>
          </div>
        </div>
        <p className="font-semibold text-xs">
          Product price: ${product.prices?.original_price / 100}
        </p>
        <p className="font-semibold text-sm mt-3">Product description</p>
        <div className="w-80">
          <p className=" text-xs text-gray-400">{product.description}</p>
        </div>
        <div className="border-t mt-6  border-dotted border-secondary">
          <p className="font-semibold text-sm mt-3">Product Images</p>
          <div className="grid grid-cols-4 gap-x-4 gap-y-2 mt-6 ">
            {product.images.map((image, index) => (
              <img
                key={index}
                className="h-36 w-36 rounded-md object-contain"
                src={image}
                alt="prods"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
