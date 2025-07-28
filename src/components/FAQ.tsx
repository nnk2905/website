import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I book a rental car?',
      answer:
        'You can book a rental car by calling us directly at +91 7799118556 or +91 9573978446, or by filling out our contact form. Our team will assist you in selecting the perfect vehicle for your needs.',
    },
    {
      question: 'Can I rent a car for a cross-country drive?',
      answer:
        'Yes! We specialize in cross-country drives. Our well-maintained fleet is perfect for long-distance travel, and we offer both self-driving options and experienced drivers for your journey.',
    },
    {
      question: 'What are your rental prices?',
      answer:
        'Our rental prices start from ₹2500 per day for our Maruti Suzuki Dzire and ₹3000 per day for our Ertiga VXI. All prices are transparent with no hidden charges.',
    },
    {
      question: 'What if the car model I want is not available?',
      answer:
        "No worries! If the car model you need isn't available, you can request a specific car by calling us or filling out our contact form. We'll do our best to arrange the vehicle that meets your requirements.",
    },
    {
      question: 'Can I book a car for self-driving?',
      answer:
        'Yes, we offer self-driving options for our rental cars. You can enjoy the freedom of driving at your own pace and exploring destinations independently.',
    },
    {
      question: 'What if I need to cancel or reschedule my booking?',
      answer:
        'We understand that plans can change. Please contact us as soon as possible at +91 7799118556 or +91 9573978446 to discuss cancellation or rescheduling options. Our team will work with you to find the best solution.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FAQ
          </h2>
          <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Use our services with confidence! Here are some common questions
            about our car rental process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-left flex items-center justify-between"
              >
                <h4 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h4>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="bg-white mt-2 p-6 rounded-xl shadow-md border-t-2 border-emerald-600">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
