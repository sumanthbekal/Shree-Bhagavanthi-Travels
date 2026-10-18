"use client";

import React, { useState } from "react";
import { BUSINESS_CONFIG, buildWhatsAppUrl } from "@/config/business";
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2 } from "lucide-react";

export const Contact: React.FC = () => {
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.name || !contactData.phone) return;

    setSubmitted(true);
    const text = `*New Contact Message - Shree Bhagavanthi Travels*\nName: ${contactData.name}\nPhone: ${contactData.phone}\nMessage: ${contactData.message || "Please call me back regarding travel."}`;
    window.open(buildWhatsAppUrl(text), "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0878C9] text-xs font-bold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#10172A] tracking-tight">
            Contact & Office Location
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Reach out directly for immediate taxi bookings, outstation quotes, and trip queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Phone Numbers & Address Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#10172A] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0878C9]/20 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-black mb-6 text-white tracking-tight">
                {BUSINESS_CONFIG.name}
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FFD900]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Address</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {BUSINESS_CONFIG.address.landmark}, {BUSINESS_CONFIG.address.street}
                    </p>
                    <p className="text-xs text-slate-300">
                      {BUSINESS_CONFIG.address.city} - {BUSINESS_CONFIG.address.pincode}, {BUSINESS_CONFIG.address.state}
                    </p>
                  </div>
                </div>

                {/* Primary Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FFD900]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Directly</h4>
                    <div className="flex flex-col gap-1 mt-1">
                      {BUSINESS_CONFIG.phones.map((phone) => (
                        <a
                          key={phone.number}
                          href={`tel:${phone.number}`}
                          className="text-base font-bold text-white hover:text-[#FFD900] transition-colors flex items-center gap-2"
                        >
                          <span>{phone.display}</span>
                          {phone.isPrimary && (
                            <span className="text-[10px] bg-[#0878C9] text-white px-2 py-0.5 rounded font-medium">
                              Primary
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat Link */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Enquiry</h4>
                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                        "Hello Shree Bhagavanthi Travels, I would like to book a taxi."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-1 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Chat on WhatsApp (+91 97418 52609)
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 pt-2 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-slate-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Booking Availability</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      24 Hours Taxi Dispatch & Pre-Bookings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Contact Form & Map Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Have questions or need immediate travel advice? Leave your phone number and we will connect with you right away.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="font-bold text-emerald-900 text-sm">Message Sent via WhatsApp!</p>
                  <p className="text-xs text-emerald-700 mt-1">Our team will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        placeholder="e.g. Suresh"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0878C9] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0878C9] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Travel Route
                    </label>
                    <textarea
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="e.g. Need taxi from Mulki to Dharmasthala on coming Saturday morning..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0878C9] bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#0878C9] hover:bg-[#0662a6] text-white shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map Direction Card */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 text-[#0878C9] rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Locate Us in Mulki</h4>
                  <p className="text-xs text-slate-500">
                    Lingappadavakadu, near Mallikarjuna Mata, Mulki 574154
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Mulki,Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
