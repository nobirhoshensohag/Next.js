"use client";

import { motion } from "framer-motion";
import { Search, PenTool, ShoppingCart, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Browse & Select",
    description:
      "Discover our delicious range of cakes and desserts crafted for every occasion, taste, and celebration style.",
    icon: Search,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    number: "02",
    title: "Customize Details",
    description:
      "Add your personal touch with custom flavors, messages, sizes, and designs to make your cake truly special.",
    icon: PenTool,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    number: "03",
    title: "Confirm Order",
    description:
      "Complete your order securely by choosing your preferred delivery date and convenient payment option.",
    icon: ShoppingCart,
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    number: "04",
    title: "Enjoy Delivery",
    description:
      "We freshly bake your cake and deliver it safely to your doorstep, right on time for your celebration.",
    icon: Truck,
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl">🎂</div>
        <div className="absolute bottom-20 right-10 text-8xl">🧁</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">🍰</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How <span className="text-pink-600">It Works</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ordering your favorite cake is quick and easy. Just follow these
            simple steps and we’ll take care of the rest.
          </p>
        </motion.div>

        {/* Desktop Steps */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-200 via-purple-200 to-green-200 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
                    >
                      {/* Number */}
                      <div
                        className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                      >
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={`${step.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mt-6 mb-4`}
                      >
                        <IconComponent className={step.iconColor} size={32} />
                      </motion.div>

                      <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm text-center leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Steps */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="relative flex gap-6"
              >
                {index !== steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-pink-200 to-purple-200 -translate-x-1/2" />
                )}

                <div
                  className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                >
                  {index + 1}
                </div>

                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div
                    className={`${step.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}
                  >
                    <IconComponent className={step.iconColor} size={28} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
