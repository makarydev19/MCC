import Counts from "../Counts/Counts";

const LandingPage = () => {
  return (
    <section className="flex items-center mb-20 h-[85vh] landing-bg drop-shadow-sm rounded-b-3xl">
      <div className="w-full h-full lg:flex gap-y-20 flex-col items-center justify-center backdrop-brightness-[.4] rounded-b-xl lg:py-0 py-44">
        <div className="flex flex-col gap-y-10">
          <h1 className="lg:text-8xl text-5xl text-center text-white">
            We Build Your Dreams
          </h1>
          <p className="text-gray-100 lg:text-3xl text-2xl text-center">
            Modern Construction Company
          </p>
        </div>
        <div
          // data-aos="fade-up"
          // data-aos-duration="900"
          // data-aos-anchor-placement="top-bottom"
          className="lg:-mb-44 lg:mt-0 mt-28 w-full"
        >
          <Counts />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
