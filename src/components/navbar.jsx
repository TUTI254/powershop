import { Link } from "react-router-dom";
import { AlignJustify, BarChart2 } from "lucide-react";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="bg-white rounded-full relative mt-8  h-14 pt-2 ">
        <div className="flex items-center justify-between px-2 ">
          <div className="ml-2 flex items-center justify-between space-x-4">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 mb-2">
              <img src="/logo.svg" width="150" height="150" alt="logo" />
            </Link>
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 mb-2">
              <img src="/store.svg" width="18" height="18" alt="logo" />
              <p className="text-sm">My Store</p>
            </Link>
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 mb-2">
              <img src="/wallet.svg" width="18" height="18" alt="logo" />
              <p className="text-sm">Income</p>
            </Link>
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 mb-2">
              <BarChart2 size={18} />
              <p className="text-sm">Anayltics</p>
            </Link>
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 mb-2">
              <img src="/box.svg" width="18" height="18" alt="logo" />
              <p className="text-sm">Order Backlog</p>
            </Link>
          </div>
          <div className="mb-2">
            <AlignJustify className="w-9 h-9 bg-main p-2 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
