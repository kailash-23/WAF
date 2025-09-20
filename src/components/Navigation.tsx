import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, Plus, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-bold text-black tracking-tight group-hover:text-gray-700 transition-colors duration-200">
              WAF XORA
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-12">
            <form onSubmit={handleSearch} className="w-full relative">
              <Input
                type="text"
                placeholder="Search for products, brands, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-4 pr-12 border-gray-300 rounded-lg focus:border-black focus:ring-1 focus:ring-black/10 text-sm bg-gray-50 focus:bg-white transition-all duration-200"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 top-2 h-8 w-8 p-0 bg-black hover:bg-gray-800 text-white rounded-md transition-colors duration-200"
                variant="default"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive("/")
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link
              to="/search"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive("/search")
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
            >
              Products
            </Link>
            <Link
              to="/upload"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${
                isActive("/upload")
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
            >
              <Plus className="h-4 w-4 mr-1" />
              Sell
            </Link>
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Link to="/login">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-10 px-6 border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-200 font-medium"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-4 pr-12 border-gray-300 rounded-lg focus:border-black focus:ring-1 focus:ring-black/10 text-sm bg-gray-50 focus:bg-white"
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-2 top-1.5 h-8 w-8 p-0 bg-black hover:bg-gray-800 text-white rounded-md"
              variant="default"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6">
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive("/")
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/search"
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive("/search")
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/upload"
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${
                  isActive("/upload")
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Sell
              </Link>
              <div className="pt-3 mt-3 border-t border-gray-200">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start h-11 border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-200 font-medium"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;