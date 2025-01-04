'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast'; // Make sure to import from your custom hook
import { BlurFade } from '../ui/blur-fade';

interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { toast } = useToast(); // Initialize the toast hook from shadcn/ui
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });

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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result: { text: any }) => {
          console.log(result.text);
          // Trigger the toast on successful form submission
          toast({
            title: 'Success',
            description: 'Your message has been sent successfully.',
            variant: 'default', // You can customize the variant for styling
          });
        },
        (error: { text: any }) => {
          console.log(error.text);
          // Trigger toast on error
          toast({
            title: 'Error',
            description: 'There was an error sending your message.',
            variant: 'default', // Use a different style for errors
          });
        }
      );
  };

  return (
    <BlurFade delay={0.25 * 3} inView>
      <div className="my-6 overflow-hidden bg-white dark:bg-zinc-950 border dark:border-zinc-900 rounded-xl">
        <div className="lg:px-12 px-5 py-12 sm:p-12">
          <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-[whitesmoke]">
            Send Us A Message
          </h3>

          <form onSubmit={handleSubmit} className="mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900 dark:text-gray-100"
                >
                  Your name
                </label>
                <div className="mt-2.5 relative">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900 dark:text-gray-100"
                >
                  Email address
                </label>
                <div className="mt-2.5 relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-base font-medium text-gray-900 dark:text-gray-100"
                >
                  Phone number
                </label>
                <div className="mt-2.5 relative">
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="text-base font-medium text-gray-900 dark:text-gray-100"
                  htmlFor="reason"
                >
                  Reason for Contacting
                </label>
                <div className="mt-2.5 relative">
                  <input
                    placeholder="State Reason"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
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
                <label
                  htmlFor="message"
                  className="text-base font-medium text-gray-900 dark:text-gray-100"
                >
                  Message
                </label>
                <div className="mt-2.5 relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="State Message"
                    required
                    className="block w-full px-4 py-4 text-black dark:text-white placeholder-gray-500 transition-all duration-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
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
          </form>
        </div>
      </div>
    </BlurFade>
  );
};

export default ContactForm;
