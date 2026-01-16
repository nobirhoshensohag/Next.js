"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Instagram,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Bagachara,Sharsha", "Jessore, Bangladesh"],
    color: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+880 1306-030858", "+880 1883-046455"],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["nobirhoshensohag708@gmail.com", "nobirhoshensohag12@gmail.com"],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:30 AM - 8:30 PM", "Sunday: 11:00 AM - 7:00 PM"],
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
];

const socialMedia = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/nobir.hoshen.sohag",
    color: "hover:bg-blue-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/nobir.hoshen.sohag",
    color: "hover:bg-pink-600",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "#",
    color: "hover:bg-green-600",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-9xl">📞</div>
          <div className="absolute bottom-10 left-10 text-9xl">✉️</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Get in <span className="text-pink-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions about our cakes? Want to place a custom order? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-center"
                >
                  <div className={`${info.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={info.iconColor} size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1711-123456"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
                  >
                    {isSubmitted ? (
                      <>
                        Message Sent! ✓
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>

                  {isSubmitted && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 font-semibold text-center"
                    >
                      🎉 Thank you! We'll respond soon.
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.024819728266!2d90.4122!3d23.7808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1c8f7c5e1%3A0x1234567890abcdef!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SweetCakes Location"
                ></iframe>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay connected with us on social media for updates, new flavors, and special offers!
                </p>

                <div className="flex gap-4">
                  {socialMedia.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-gray-100 ${social.color} text-gray-600 hover:text-white p-4 rounded-xl transition-all shadow-md hover:shadow-lg`}
                      >
                        <IconComponent size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="mb-6 opacity-95">
                  For urgent orders or same-day delivery inquiries, please call us directly:
                </p>
                <a
                  href="tel:+8801306030858"
                  className="inline-flex items-center gap-3 bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition"
                >
                  <Phone size={20} />
                  +880 1306-030858
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="text-pink-600">Questions</span>
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How far in advance should I order?",
                a: "We recommend ordering at least 3-5 days in advance for custom cakes. For simple designs, 24-48 hours notice is usually sufficient.",
              },
              {
                q: "Do you deliver?",
                a: "Yes! We offer delivery across Dhaka city. Delivery charges vary based on location. Same-day delivery is available for orders placed before 12 PM.",
              },
              {
                q: "Can I customize my cake design?",
                a: "Absolutely! We specialize in custom designs. Share your ideas, photos, or themes, and our decorators will bring them to life.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept cash on delivery, bKash, Nagad, and all major credit/debit cards.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-pink-50 rounded-2xl p-6 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-800 mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}