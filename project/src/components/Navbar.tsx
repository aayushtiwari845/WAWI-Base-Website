import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Home, Package, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { state } = useCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-xl font-bold text-gray-800">
              <Package className="h-6 w-6 mr-2" />
              ShopHub
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <Home className="h-5 w-5 mr-1" />
              Home
            </Link>
            
            <Link to="/products" className="flex items-center text-gray-600 hover:text-gray-900">
              <Package className="h-5 w-5 mr-1" />
              Products
            </Link>
            
            <Link to="/about" className="flex items-center text-gray-600 hover:text-gray-900">
              <Info className="h-5 w-5 mr-1" />
              About
            </Link>
            
            <Link to="/cart" className="flex items-center text-gray-600 hover:text-gray-900">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {state.items.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}