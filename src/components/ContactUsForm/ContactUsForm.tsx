import Form from "../Form/Form";

const ContactUsForm = () => {
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

      <Form />
      <section className="py-10 bg-white sm:py-16 lg:py-16 mt-9 rounded-xl">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 xl:gap-x-20">
            <div className="flex items-start">
              <svg
                className="flex-shrink-0 w-10 h-10 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="ml-6">
                <p className="text-base font-medium text-black/50">Call us</p>
                <p className="mt-4 text-xl font-medium text-gray-900">
                  (316) 555-0116
                </p>
                <p className="mt-1 text-xl font-medium text-gray-900">
                  (316) 555-0117
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="flex-shrink-0 w-10 h-10 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-6">
                <p className="text-base font-medium text-black/50">Email us</p>
                <p className="mt-4 text-xl font-medium text-gray-900">
                  contact@example.com
                </p>
                <p className="mt-1 text-xl font-medium text-gray-900">
                  support@example.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="flex-shrink-0 w-10 h-10 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="ml-6">
                <p className="text-base font-medium text-black/50">Location</p>
                <p className="mt-4 text-xl font-medium leading-relaxed text-gray-900">
                  8502 Preston Rd. Inglewood, Maine 98380, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUsForm;
