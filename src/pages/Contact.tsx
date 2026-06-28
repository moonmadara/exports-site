import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919372956041';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-grove-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-grove-300 text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-balance">
              Get in Touch
            </h1>
            <p className="mt-4 text-grove-200 text-lg">
              Together, we grow global partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 border border-cream-200 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-soil-900">
                      Head Office
                    </p>
                    <p className="mt-1 text-sm text-soil-500">
                      Thane, Maharashtra - 400607,
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="h-px bg-cream-200" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-soil-900">Email</p>
                    <a
                      href="mailto:sattvikaoverseas@gmail.com"
                      className="mt-1 text-sm text-grove-600 hover:text-grove-700 transition-colors"
                    >
                      sattvikaoverseas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="h-px bg-cream-200" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-soil-900">Phone</p>
                    <a
                      href="tel:+919372956041"
                      className="mt-1 text-sm text-grove-600 hover:text-grove-700 transition-colors"
                    >
                      +91 93729 56041
                    </a>
                  </div>
                </div>

                <div className="h-px bg-cream-200" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-soil-900">
                      Website
                    </p>
                    <p className="mt-1 text-sm text-soil-500">
                      www.sattvikaoverseas.com
                    </p>
                  </div>
                </div>

                <div className="h-px bg-cream-200" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-soil-900">
                      WhatsApp
                    </p>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-sm text-[#25D366] hover:text-[#1ebe57] transition-colors font-medium"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="h-px bg-cream-200" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-grove-50 text-grove-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-soil-900">
                      Business Hours
                    </p>
                    <p className="mt-1 text-sm text-soil-500">
                      Monday - Saturday
                      <br />
                      09:00 AM - 06:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1ebe57] transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Us on WhatsApp
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 border border-cream-200 text-center">
                  <div className="w-16 h-16 rounded-full bg-grove-100 text-grove-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-display font-bold text-soil-900">
                    Message Sent
                  </h3>
                  <p className="mt-3 text-soil-500">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-grove-600 hover:text-grove-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 sm:p-10 border border-cream-200 space-y-6"
                >
                  <h2 className="text-2xl font-display font-bold text-soil-900">
                    Send Us a Message
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-soil-700 mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-soil-900 placeholder-soil-400 focus:outline-none focus:ring-2 focus:ring-grove-500/30 focus:border-grove-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-soil-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-soil-900 placeholder-soil-400 focus:outline-none focus:ring-2 focus:ring-grove-500/30 focus:border-grove-500 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-soil-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-soil-900 placeholder-soil-400 focus:outline-none focus:ring-2 focus:ring-grove-500/30 focus:border-grove-500 transition-colors"
                      placeholder="What is this about?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-soil-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-soil-900 placeholder-soil-400 focus:outline-none focus:ring-2 focus:ring-grove-500/30 focus:border-grove-500 transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-grove-600 text-white font-semibold hover:bg-grove-700 transition-all shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
