"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "mcc_service_8cqyuxo",
        "template_11hycd7",
        e.target as HTMLFormElement,
        "G5i2ybEI37ORqpQQE"
      )
      .then(
        (result: { text: any }) => {
          console.log(result.text);
          setSent(true);
        },
        (error: { text: any }) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mt-6 overflow-hidden bg-white rounded-xl">
      <div className="px-6 py-12 sm:p-12">
        <h3 className="text-3xl font-semibold text-center text-gray-900">
          Send us a message
        </h3>

        <form onSubmit={handleSubmit} className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Your name{" "}
              </label>
              <div className="mt-2.5 relative">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div className="mt-2.5 relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Phone number{" "}
              </label>
              <div className="mt-2.5 relative">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="text-base font-medium text-gray-900"
                htmlFor="reason"
              >
                Reason for Contacting
              </label>
              <div className="mt-2.5 relative">
                <input
                  placeholder="Your Reason"
                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  id="reason"
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Message{" "}
              </label>
              <div className="mt-2.5 relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                ></textarea>
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-lg font-semibold transition-all duration-200 text-white bg-blue-800 border border-transparent rounded-md focus:outline-none hover:bg-accent hover:text-white focus:bg-accent"
              >
                Submit
              </button>
            </div>
          </div>
          {sent && (
            <p className="text-red-700 text-2xl text-center mt-5">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;