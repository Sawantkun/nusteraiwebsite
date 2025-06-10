import React, { useState } from 'react';
import { Check, X, Zap, Crown, Rocket, Brain, Shield, Users, ArrowRight, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: 'Starter',
      icon: <Zap className="w-6 h-6" />,
      description: 'Perfect for small businesses starting their AI journey',
      price: { monthly: 99, yearly: 79 },
      badge: 'Best Value',
      badgeColor: 'bg-[#795EF6]',
      features: [
        '1 AI Agent',
        'Basic Process Automation',
        'Standard Support',
        'Cloud Integration',
        'Basic Analytics'
      ],
      limitations: [
        'Custom AI Development',
        'Advanced Analytics',
        'Priority Support',
        'API Access'
      ],
      cta: 'Start Free Trial',
      popular: false,
      color: 'border-gray-700 hover:border-[#845EF6]/30'
    },
    {
      name: 'Professional',
      icon: <Brain className="w-6 h-6" />,
      description: 'Advanced AI solutions for growing businesses',
      price: { monthly: 299, yearly: 249 },
      badge: 'Most Popular',
      badgeColor: 'bg-[#795EF6]',
      features: [
        '5 AI Agents',
        'Advanced Process Automation',
        'Custom AI Development',
        'Advanced Analytics',
        'API Access',
        'Priority Support',
        'Cloud Integration',
        'Team Collaboration'
      ],
      limitations: [
        'Enterprise Features',
        'Custom Infrastructure',
        'Dedicated Support'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'border-[#795EF6]/50 shadow-xl shadow-[#795EF6]/10'
    },
    {
      name: 'Enterprise',
      icon: <Crown className="w-6 h-6" />,
      description: 'Complete AI solution for large organizations',
      price: { monthly: 999, yearly: 799 },
      badge: 'Full Power',
      badgeColor: 'bg-gradient-to-r from-[#795EF6] to-[#F8A588]',
      features: [
        'Unlimited AI Agents',
        'Custom AI Development',
        'Enterprise Infrastructure',
        'Advanced Analytics Suite',
        'Full API Access',
        'Custom Integrations',
        'Dedicated Support Team',
        'SLA Guarantee',
        '24/7 Priority Support'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-gray-700 hover:border-[#845EF6]/30'
    }
  ];

  const faqs = [
    {
      question: 'How do your AI agents work?',
      answer: 'Our AI agents are trained on industry-specific data and can handle complex tasks like customer service, data analysis, and process automation. They continuously learn and improve with usage.'
    },
    {
      question: 'Can I customize the AI solutions?',
      answer: 'Yes, our Professional and Enterprise plans offer custom AI development and integration services. We work closely with you to tailor solutions to your specific business needs.'
    },
    {
      question: 'Is my business data secure?',
      answer: 'Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure cloud infrastructure, and strict access controls. Your data privacy is our top priority.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide comprehensive support across all plans. Starter includes standard support, Professional includes priority support, and Enterprise includes 24/7 dedicated support with an SLA guarantee.'
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade your plan at any time. The new features will be available immediately, and we will prorate the cost difference.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Tech Startup CEO',
      content: 'Nuster AIs agents have transformed our customer service operations. The ROI has been incredible!',
      rating: 5,
      image: '👩‍💻'
    },
    {
      name: 'David Chen',
      role: 'Enterprise Solutions Director',
      content: 'The custom AI solutions have streamlined our operations and reduced costs significantly.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      content: 'The Professional plan offers the perfect balance of features and value for our growing business.',
      rating: 5,
      image: '📊'
    }
  ];
const handleRedirect =()=>{
  window.location.href="/contact"
}
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      

      {/* Testimonials Section */}
      <div className="px-6 lg:px-12 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <span className="bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent">What Our Users Say</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hear from our satisfied customers about how Nuster AI has transformed their financial operations.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i} 
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-[#845EF6]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-[#795EF6] fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#845EF6]/20 rounded-full flex items-center justify-center text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 lg:px-12 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
             <span className="bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to the most common questions about Nuster AI and our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-[#845EF6]/30 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <details>
                <summary className="flex justify-between items-center text-white font-semibold cursor-pointer text-lg">
                  <span>{faq.question}</span>
                  <span className="ml-2">
                    <svg className="w-5 h-5 transform rotate-0 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className=" flex flex-col items-center text-center py-20 px-6 lg:px-12 bg-gray-900/50 border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-4"><span className='bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent'>Let's Build Your AI Future</span> </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-4xl text-center">Ready to transform your business with AI? Our team of experts is here to help you navigate the future of intelligent automation.</p>
        <button onClick={handleRedirect} className="cursor-pointer group bg-gradient-to-r from-[#845EF6] to-[#F8A588] hover:from-[#795EF6] hover:to-[#845EF6] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#845EF6]/25 flex items-center justify-center space-x-2">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
