import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-indigo-600">ShopHub</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover our curated collection of premium products. From electronics to accessories,
                  we've got everything you need.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <Link
                    to="/products"
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60"
            alt="Shopping"
          />
        </div>
      </div>
    </div>
  );
}