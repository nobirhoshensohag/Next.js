"use client";

import { motion } from "framer-motion";
import { GiCupcake } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";

const features = [
  {
    title: "Premium Quality Cakes",
    description:
      "We use hand-picked ingredients to ensure rich taste, softness, and freshness in every bite.",
    icon: GiCupcake,
  },
  {
    title: "Personalized Creations",
    description:
      "From simple to luxury designs, we create cakes that perfectly match your special moments.",
    icon: MdDesignServices,
  },
  {
    title: "Quick & Safe Delivery",
    description:
      "Our fast delivery system ensures your cake reaches you fresh and right on time.",
    icon: FaTruckFast,
  },
  {
    title: "Best Value Promise",
    description:
      "Enjoy premium cakes at competitive prices with regular discounts and special offers.",
    icon: BiSolidOffer,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Why People Love{" "}
            <span className="text-[#EC4899]">SweetCakes</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We blend passion, creativity, and quality to deliver unforgettable
            cake experiences for every celebration.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white rounded-2xl p-7 text-center shadow-lg hover:shadow-2xl transition"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-pink-100">
                  <IconComponent className="text-3xl text-[#EC4899]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
