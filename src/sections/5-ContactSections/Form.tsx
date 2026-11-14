'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { IconArrowUpRight, IconLoader2 } from '@tabler/icons-react';
import { useToast } from '@/hooks/use-toast';
import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/libs/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

const ContactForm: React.FC<{ className?: string }> = ({ className }) => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
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
    setSending(true);

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
          toast({
            title: 'Success',
            description: 'Your message has been sent successfully.',
            variant: 'default',
          });
        },
        (error: { text: any }) => {
          console.log(error.text);
          toast({
            title: 'Error',
            description: 'There was an error sending your message.',
            variant: 'default',
          });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <Reveal delay={0.15} className={cn('w-full', className)}>
      <div className="card p-6 text-fg shadow-lift sm:p-10">
        <h3 className="font-display text-2xl font-extrabold tracking-tight text-fg md:text-3xl">
          Send Us A Message
        </h3>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="label">
                Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="field"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="label">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="field"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="label">
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="field"
                required
              />
            </div>

            <div>
              <label htmlFor="reason" className="label">
                Reason for Contacting
              </label>
              <input
                placeholder="State Reason"
                className="field"
                id="reason"
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="State Message"
                required
                className="field resize-y"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={sending}
                className="btn-brand mt-1 w-full"
              >
                {sending ? (
                  <>
                    <IconLoader2 className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Submit
                    <IconArrowUpRight stroke={2.2} />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Reveal>
  );
};

export default ContactForm;
