import Counts from "../Counts/Counts";

const LandingPage = () => {
  return (
    <section className="mb-56 lg:h-[75vh] md:h-[30vh] h-[55vh] landing-bg drop-shadow-sm rounded-b-3xl">
      <div className="w-full h-full flex gap-y-20 flex-col items-center justify-end backdrop-brightness-[.4] rounded-b-xl lg:py-20 py-10">
        <div className="flex flex-col gap-y-10">
          <h1 className="lg:text-8xl text-5xl text-center text-white">
            We Build Your Dreams
          </h1>
          <p className="text-gray-100 lg:text-3xl text-2xl text-center">
            Modern Construction Company
          </p>
        </div>
      </div>
      <div className="w-full lg:-mt-11 -mt-5">
        <div
          // data-aos="fade-up"
          // data-aos-duration="900"
          // data-aos-anchor-placement="top-bottom"
          className=""
        >
          <Counts />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
