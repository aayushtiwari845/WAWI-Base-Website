import React from 'react';
import { Package, Truck, CreditCard, Phone } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Quality Products",
      description: "We carefully select and curate our products to ensure the highest quality for our customers."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Shipping",
      description: "Get your orders delivered quickly with our reliable shipping partners."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Secure Payments",
      description: "Shop with confidence using our secure payment processing system."
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Our customer support team is always ready to help you with any questions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About ShopHub
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Your trusted destination for quality products and exceptional shopping experience.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-indigo-600 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Story
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Founded with a vision to provide high-quality products and exceptional service, 
            ShopHub has grown to become a trusted name in online retail. We believe in 
            building lasting relationships with our customers through transparency, 
            reliability, and outstanding customer service.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our team works tirelessly to source the best products and ensure a seamless 
            shopping experience. We take pride in our carefully curated selection and our 
            commitment to customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}