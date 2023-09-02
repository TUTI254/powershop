import { X } from "lucide-react";
import useProduct from "../hooks/useProduct";
import PropTypes from "prop-types";

const ProductModal = ({ pid, onClose }) => {
  const { loading, error, data } = useProduct(pid);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const product = data.getProductById;
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <div className="flex items-center gap-2">
          <X
            className="h-12 w-12 p-2 bg-main text-black cursor-pointer rounded-md"
            onClick={onClose}
          />
          <span className="h-12 w-12 p-4 bg-secondary text-center text-white cursor-pointer rounded-md">
            <p>${product.prices.original_price}</p>
          </span>
        </div>
      </div>
      <p className="font-semibold text-xs">
        Product price: ${product.prices.original_price}
      </p>
      <p className="font-semibold text-sm mt-3">Product description</p>
      <p className="font-thin text-xs text-gray-300">{product.description}</p>

      <div className="border-t mt-12  border-dotted border-secondary">
        <p className="font-semibold text-sm mt-3">Product Images</p>
        <div className="grid grid-cols-4 gap-x-4 gap-y-2 mt-6 ">
          {product.images.map((image, index) => (
            <div
              key={index}
              className="h-36 w-36 rounded-md"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
ProductModal.propTypes = {
  pid: PropTypes.string.isRequired, // Specify the prop types and whether they are required
  onClose: PropTypes.func.isRequired,
};

export default ProductModal;
