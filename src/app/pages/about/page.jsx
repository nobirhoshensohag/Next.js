
"use client";

import { motion } from "framer-motion";
import { Heart, Users, Award, Clock, Target, Sparkles } from "lucide-react";

const stats = [
  { number: "10K+", label: "Happy Customers" },
  { number: "500+", label: "Cakes Delivered Monthly" },
  { number: "50+", label: "Unique Designs" },
  { number: "5 Years", label: "Of Excellence" },
];

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description: "We use only premium ingredients and maintain the highest standards in every cake we create.",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Your satisfaction is our priority. We listen, customize, and deliver exactly what you envision.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Our skilled bakers and decorators bring years of experience to create edible masterpieces.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect your schedule and ensure fresh cakes arrive exactly when you need them.",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
];

const team = [
  {
    name: "Ayesha Rahman",
    role: "Founder & Head Baker",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "With 15 years of baking experience, Ayesha founded SweetCakes to bring joy to every celebration.",
  },
  {
    name: "Rafiq Ahmed",
    role: "Master Decorator",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Rafiq transforms cakes into art with his incredible attention to detail and creative designs.",
  },
  {
    name: "Fatima Khan",
    role: "Pastry Chef",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Fatima specializes in delicate pastries and creates the perfect balance of flavor and texture.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🎂</div>
          <div className="absolute bottom-10 right-10 text-9xl">🧁</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              About <span className="text-pink-600">SweetCakes</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Bringing sweetness to your celebrations since 2019. We're passionate about creating beautiful, delicious cakes that make every moment special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&h=600&fit=crop"
                  alt="Bakery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-pink-600 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years of Sweet Success</div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-pink-600" size={24} />
                <span className="text-pink-600 font-semibold">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Baked with Love, Delivered with Care
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SweetCakes was born from a simple passion: creating delicious cakes that bring smiles to people's faces. What started as a home kitchen hobby in 2019 has grown into one of the most trusted bakeries in the city.
                </p>
                <p>
                  Our founder, Ayesha Rahman, believed that every celebration deserves a cake as unique as the occasion itself. This belief drives everything we do - from sourcing the finest ingredients to hand-crafting every decoration with care.
                </p>
                <p>
                  Today, we're proud to serve thousands of happy customers, creating custom cakes for birthdays, weddings, corporate events, and everything in between. Each cake tells a story, and we're honored to be part of yours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-pink-600">Core Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from recipe creation to customer service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
                >
                  <div className={`${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className={value.iconColor} size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our <span className="text-pink-600">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Talented bakers and decorators dedicated to making your celebrations unforgettable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pink-600 font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Target className="mx-auto mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed opacity-95">
              To create exceptional cakes that not only taste amazing but also create lasting memories. We believe every celebration deserves a centerpiece that's as special as the people celebrating, and we're committed to delivering joy, one cake at a time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}