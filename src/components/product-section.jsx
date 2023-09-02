import ProductTable from "./product-table";

const ProductSection = () => {
  return (
    <div className="mx-auto max-w-7xl mb-6">
      <button className="bg-secondary flex items-center justify-between px-5 py-5 mt-4 text-white rounded-lg space-x-2">
        <img src="/Bag.svg" width="20" height="20" alt="logo" />
        <span className="text-xs">Your own Product</span>
      </button>
      <ProductTable />
    </div>
  );
};

export default ProductSection;
