import Form from '../Form/Form';

const ContactUs = () => {
  return (
    <section className="py-28 dark:bg-black bg-gray-100 sm:py-16 lg:py-36">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-[whitesmoke] sm:text-4xl lg:text-5xl">
            Contact us
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16 flex flex-col gap-y-5">
          <div className="grid grid-cols-1 gap-6 text-center md:px-0 md:grid-cols-3">
            <div className="overflow-hidden bg-white dark:bg-zinc-950 border dark:border-zinc-900 rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-gray-900 dark:text-gray-100">
                  +1-316-555-0116
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-gray-100">
                  +1-446-526-0117
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white dark:bg-zinc-950 border dark:border-zinc-900 rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-gray-900 dark:text-gray-100">
                  contact@example.com
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-gray-100">
                  hr@example.com
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white dark:bg-zinc-950 border dark:border-zinc-900 rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900 dark:text-gray-100">
                  52 El-Ansar, Ad Doqi, Dokki, Giza Governorate 3751060
                </p>
              </div>
            </div>
          </div>
          <iframe
            className="w-[100%] border-0 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.860014100586!2d31.19624177468242!3d30.04087367492535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847dfadab6abb%3A0x613111d2768cb9b8!2zTUNDIC0g2LTYsdmD2Kkg2KfZhNin2YbYtNin2KHYp9iqINin2YTYrdiv2YrYq9ipINmE2YTZhdmC2KfZiNmE2KfYqg!5e0!3m2!1sen!2seg!4v1729085172479!5m2!1sen!2seg"
            width="600"
            height="450"
            allowFullScreen
            title="Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
