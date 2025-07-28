import React, { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_0o372r5', // ✅ Your EmailJS service ID
        'template_2jihdmq', // ✅ Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'vd5Er4NA26QFHNsxC' // 🔑 Replace this with your actual public key from EmailJS
      )
      .then(() => {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert(
          'There was an error sending your message. Please try again later.'
        );
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 to-emerald-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury car interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                NNN Kartikeya <span className="text-emerald-300">Travels</span>
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Experience the ultimate in comfort with our rental cars,
                designed to make your journey enjoyable and stress-free. Choose
                from our diverse fleet to find the perfect vehicle for your
                needs, whether it's a quick trip or a family adventure.
              </p>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                With flexible booking options, convenient pick-up and drop-off,
                and 24/7 support, we ensure your travels are smooth and
                effortless. Drive at your own pace and explore new destinations
                with ease!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-emerald-300" />
                  <div>
                    <p className="font-semibold opacity-90 leading-relaxed">
                      <a href="tel:+917799118556">+91 7799118556</a>
                    </p>
                    <p className="font-semibold opacity-90 leading-relaxed">
                      <a href="tel:+919573978446">+91 9573978446</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-emerald-300" />
                  <p className="font-semibold">nnnkartikeyatravels@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 opacity-90 leading-relaxed">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-500">
        <p>© 2023 NNN Kartikeya Travels. Available 24/7.</p>
      </div>
    </section>
  );
};

export default Contact;
