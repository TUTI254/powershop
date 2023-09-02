import { useState } from "react";
import useProducts from "../hooks/useProducts";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
// import ProductModal from "./product-modal";
import { Link } from "react-router-dom";

const columns = [
  "Image",
  "Date",
  "Title",
  "Customer Description",
  "New",
  "Quantity",
  "Original Price",
  ".",
];

export default function ProductTable() {
  const itemsPerPage = 6; // Limit
  const [currentPage, setCurrentPage] = useState(1); // Page
  // const [selectedProductId, setSelectedProductId] = useState(null); // State to store selected product ID

  const { error, data, loading } = useProducts(currentPage, itemsPerPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const totalItems = data.getAllProductByPagination?.total; // Use 'total' instead of 'length'

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(totalItems / itemsPerPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // const handleViewProduct = (pid) => {
  //   setSelectedProductId(pid); // Set the selected product ID when "View Product" is clicked
  // };

  // const handleCloseModal = () => {
  //   setSelectedProductId(null); // Close the modal by resetting the selected product ID
  // };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mt-6 p-4 bg-white rounded-2xl">
        <table className="w-full">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="px-6 py-3 text-left text-gray-400 text-xs font-thin tracking-wider"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white space-y-3">
            {data.getAllProductByPagination?.map((product) => (
              <tr className="border-b" key={product._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10"
                        src={product.images[0]}
                        alt="img"
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p className="text-primary">
                    {new Date(product.created_at).toLocaleDateString()}
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p className="text-primary">{product.title}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p className="text-primary">
                    {product.your_own_shipping_location}
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    type="checkbox"
                    className="accent-secondary rounded-md text-white"
                    checked={product.is_new}
                    readOnly
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p className="">9</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <p className="">$ {product.prices?.original_price / 100}</p>{" "}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Link to={`/${product._id}`}>
                    <span className="bg-secondary py-2 px-4 rounded-full text-white hover:text-secondary ring-1 ring-secondary  hover:bg-white focus:ring-secondary focus:bg-white focus:text-secondary">
                      View Product
                    </span>
                  </Link>
                  {/* modal failed to load  */}
                  {/* <button
                    className="bg-secondary py-2 px-4 rounded-full text-white hover:text-secondary ring-1 ring-secondary  hover:bg-white focus:ring-secondary focus:bg-white focus:text-secondary"
                    onClick={() => handleViewProduct(product._id)} // Call handleViewProduct with the selected product ID
                  >
                    View Product
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-end mt-6 space-x-4 mb-3">
          <span className="flex">
            <ChevronDown className="h-4 w-4" />
            <p className="text-secondary text-xs">Scroll down this page</p>
          </span>
          <span className="flex" onClick={handlePrevPage}>
            <ChevronLeft className="h-4 w-4" />
            <p className="text-secondary text-xs">Previous page</p>
          </span>
          <span className="text-secondary text-xs border border-secondary">
            <p className="px-1">1 - 6</p>
          </span>
          <span className="flex" onClick={handleNextPage}>
            <p className="text-secondary text-xs">Next page</p>
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </div>
      {/* {selectedProductId && (
        <ProductModal
          productId={selectedProductId} // Pass the selected product ID to fetch its details
          onClose={handleCloseModal} // Pass the close function to the modal
        />
      )} */}
    </div>
  );
}
