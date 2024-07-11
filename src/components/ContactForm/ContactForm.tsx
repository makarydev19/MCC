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
    <section className="container mx-auto md:px-32 px-5 py-20">
      <div className="flex flex-col gap-4">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center font-heading w-[80%] md:w-[100%] mx-auto"
        >
          What Can Us Do For You ?
        </h1>
        <div>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-center font-sans tracking-wide lg:text-2xl text-md"
          >
            We are ready to work on a project of any complexity
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-center font-sans tracking-wide lg:text-2xl text-md"
          >
            whether its commercial or residential.
          </p>
        </div>
      </div>

      <form
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4 lg:w-[90%] mx-auto mt-10"
      >
        <div className="flex flex-wrap -mx-3 lg:mb-6">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              placeholder="Your Name"
              className="bg-gray-100 text-gray-900 border-0 w-full rounded-md py-2 px-4 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary transition ease-in-out duration-150"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              placeholder="Your Email"
              className="bg-gray-100 text-gray-900 border-0 w-full rounded-md py-2 px-4 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary transition ease-in-out duration-150"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 lg:mb-6">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              placeholder="Your Phone Number"
              className="bg-gray-100 text-gray-900 border-0 w-full rounded-md py-2 px-4 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary transition ease-in-out duration-150"
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="reason"
            >
              Reason for Contacting
            </label>
            <input
              placeholder="Your Reason"
              className="bg-gray-100 text-gray-900 border-0 w-full rounded-md py-2 px-4 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary transition ease-in-out duration-150"
              id="reason"
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            placeholder="Your Message"
            className="bg-gray-100 text-gray-900 border-0 w-full rounded-md px-5 py-10 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary transition ease-in-out duration-150"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-center mt-5">
          <button
            type="submit"
            className="bg-secondary hover:bg-primary text-white text-lg font-bold py-2 lg:px-40 px-28 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
        {sent && <p className="text-red-500">Message sent successfully!</p>}
      </form>
    </section>
  );
};

export default ContactForm;
