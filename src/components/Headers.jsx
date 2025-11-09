import { ArrowDownAZ } from "lucide-react";
import { CircleUser, Search, ShoppingCart } from "lucide-react";

function Headers({ cartCount }) {
  return (
    <header className="bg-white shadow-md flex justify-between items-center px-8 py-4 sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-gray-900 tracking-tight hover:text-blue-600 transition-colors">
        PuBox Store
      </h1>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Cari produk..."
          className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
        />
        <ArrowDownAZ />
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-6 relative">
        {/* User Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition transform hover:scale-110">
          <CircleUser className="w-6 h-6 text-gray-700" />
        </button>

        {/* Cart Icon */}
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-100 transition transform hover:scale-110">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
          </button>

          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full shadow">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Headers;
