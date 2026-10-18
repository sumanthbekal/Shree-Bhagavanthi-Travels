"use client";

import React, { useState } from "react";
import { BUSINESS_CONFIG, buildWhatsAppUrl } from "@/config/business";
import { Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";

interface BookingFormProps {
  initialService?: string;
  initialVehicle?: string;
  initialDestination?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = "",
  initialVehicle = "Any / Recommended",
  initialDestination = "",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    pickupLocation: "",
    destination: initialDestination,
    travelDate: "",
    returnDate: "",
    passengers: "1-4",
    tripType: "Round Trip",
    vehiclePreference: initialVehicle || "Any / Recommended",
    additionalRequirements: initialService ? `Enquiry for: ${initialService}` : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Validate Indian mobile number format (10 digits, starting with 6, 7, 8, or 9)
  const validateMobile = (phone: string) => {
    const cleaned = phone.replace(/[\s\-\(\)\+]/g, "").replace(/^91/, "");
    const regex = /^[6-9]\d{9}$/;
    return regex.test(cleaned);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required.";
    } else if (!validateMobile(formData.mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number (e.g., 9876543210).";
    }
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = "Please enter pickup location.";
    }
    if (!formData.destination.trim()) {
      newErrors.destination = "Please specify destination or trip plan.";
    }
    if (!formData.travelDate) {
      newErrors.travelDate = "Please select travel date.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMessage = () => {
    return `*New Trip Enquiry - Shree Bhagavanthi Travels*
---------------------------------------
*Name:* ${formData.fullName}
*Mobile:* ${formData.mobileNumber}
*Pickup Location:* ${formData.pickupLocation}
*Destination:* ${formData.destination}
*Travel Date:* ${formData.travelDate}
${formData.returnDate ? `*Return Date:* ${formData.returnDate}\n` : ""}*Trip Type:* ${formData.tripType}
*Passengers:* ${formData.passengers}
*Vehicle Preference:* ${formData.vehiclePreference}
${formData.additionalRequirements ? `*Special Notes:* ${formData.additionalRequirements}\n` : ""}---------------------------------------
_Sent via website booking enquiry form._`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);

    // Generate formatted WhatsApp message and open link in new tab
    const message = constructWhatsAppMessage();
    const waUrl = buildWhatsAppUrl(message);
    window.open(waUrl, "_blank");
  };

  return (
    <div
      id="booking-form"
      className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0878C9] via-[#FFD900] to-[#0878C9]" />

      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0878C9] text-xs font-bold mb-2">
          <span>FAST & EASY QUOTE</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#10172A] tracking-tight">
          Plan Your Travel Today
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Fill in your journey details below to receive a customized quote directly on WhatsApp or phone.
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center my-4 animate-fadeIn">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="font-bold text-emerald-900 text-base">Enquiry Sent via WhatsApp!</h4>
          <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. Your enquiry details have been forwarded to our Mulki team. We will respond promptly with availability and fare details.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-slate-700 bg-white border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-50"
            >
              Submit Another Enquiry
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phones[0].number}`}
              className="text-xs font-bold text-white bg-[#10172A] px-4 py-2 rounded-lg hover:bg-slate-800"
            >
              Call Us Directly
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Trip Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Trip Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["Round Trip", "One Way", "Local Travel", "Airport Transfer"].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setFormData({ ...formData, tripType: type })}
                  className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all text-center ${
                    formData.tripType === type
                      ? "bg-[#10172A] text-[#FFD900] border-[#10172A] shadow-sm"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Mobile Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. Ramesh Kumar"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                  errors.fullName ? "border-red-400 bg-red-50/30" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-[#0878C9]`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="e.g. 9741852609"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                  errors.mobileNumber ? "border-red-400 bg-red-50/30" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-[#0878C9]`}
              />
              {errors.mobileNumber && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.mobileNumber}
                </p>
              )}
            </div>
          </div>

          {/* Pickup & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Pickup Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleInputChange}
                placeholder="e.g. Mulki / Kinnigoli / Surathkal"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                  errors.pickupLocation ? "border-red-400 bg-red-50/30" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-[#0878C9]`}
              />
              {errors.pickupLocation && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Destination <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="e.g. Dharmasthala / Udupi / Bangalore"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                  errors.destination ? "border-red-400 bg-red-50/30" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-[#0878C9]`}
              />
              {errors.destination && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.destination}
                </p>
              )}
            </div>
          </div>

          {/* Travel Date & Return Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Travel Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleInputChange}
                className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                  errors.travelDate ? "border-red-400 bg-red-50/30" : "border-slate-300"
                } focus:outline-none focus:ring-2 focus:ring-[#0878C9]`}
              />
              {errors.travelDate && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.travelDate}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Return Date (Optional)
              </label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
              />
            </div>
          </div>

          {/* Passengers & Vehicle Preference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Number of Passengers
              </label>
              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
              >
                <option value="1-4">1 - 4 Passengers (Hatchback/Sedan)</option>
                <option value="5-7">5 - 7 Passengers (SUV / Innova)</option>
                <option value="8-12">8 - 12 Passengers (Large Vehicle)</option>
                <option value="13+">13+ Passengers (Tempo / Group)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Vehicle Preference
              </label>
              <select
                name="vehiclePreference"
                value={formData.vehiclePreference}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
              >
                <option value="Any / Recommended">Any / Recommend Best Option</option>
                <option value="Economy Hatchback (Swift/WagonR)">Economy Hatchback</option>
                <option value="Prime Sedan (Dzire/Etios)">Prime Sedan</option>
                <option value="Premium SUV (Innova/Ertiga)">Premium SUV</option>
                <option value="Tempo Traveller (12-17 Seater)">Tempo Traveller</option>
              </select>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Additional Requirements (Optional)
            </label>
            <textarea
              name="additionalRequirements"
              rows={2}
              value={formData.additionalRequirements}
              onChange={handleInputChange}
              placeholder="e.g. Flight timings, temple halt requirements, child seat request..."
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-black text-sm uppercase tracking-wider bg-[#FFD900] hover:bg-[#e6c300] active:scale-[0.99] text-slate-900 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get a Travel Quote</span>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-[11px] text-center text-slate-500 mt-2 flex items-center justify-center gap-1">
              <MessageSquare className="w-3 h-3 text-emerald-600" />
              Submitting opens a prefilled enquiry on WhatsApp directly with our Mulki team.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
