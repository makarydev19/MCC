import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const AboutUs = () => {
  return (
    <section className="pb-20">
      <div className="rounded-b-2xl servicesbg-page lg:h-[75vh] h-[45vh]">
        <div className="w-full h-full flex gap-y-20 flex-col items-center justify-center backdrop-brightness-[.4] rounded-b-xl lg:py-20 py-10">
          <div>
            <TextGenerateEffect
              className="text-gray-100 lg:text-7xl text-3xl w-[95%] mx-auto text-center"
              words="Building the future with comprehensive construction solutions"
            />
          </div>
        </div>
      </div>
      <div className="lg:px-20 px-0">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
              <div className="relative lg:mb-12">
                <Image
                  className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                  width={100}
                  height={100}
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                  alt=""
                />
                <div className="pl-12 pr-6 h-[70vh] w-full">
                  <Image
                    width={900}
                    height={900}
                    className="img relative"
                    src="/pexels-pixabay-51325.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                  <div className="max-w-xs backdrop-blur-3xl rounded-lg sm:max-w-md xl:max-w-md">
                    <div className="px-3 py-4 sm:px-5 sm:py-8">
                      <div className="flex items-start">
                        <p className="text-3xl sm:text-4xl">👋</p>
                        <blockquote className="ml-5">
                          <p className="text-sm font-medium text-white sm:text-lg">
                            “You made it so simple. My new site is so much
                            faster and easier to work with than my old site.”
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="2xl:pl-16">
                <h2
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                  className="text-lg font-sans font-medium text-secondary uppercase"
                >
                  Our Vision
                </h2>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                  We make things easy for projects.
                </h2>
                <p className="text-xl leading-relaxed text-gray-900 mt-9">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                  error, laudantium dolore voluptas, earum a ad possimus quia
                  sapiente voluptatum natus amet sint praesentium? Libero
                  numquam autem itaque voluptate voluptas?
                </p>
                <p className="mt-6 text-xl leading-relaxed text-gray-900">
                  Velit officia conse duis enim velit mollit. Exercit ation
                  veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div className="">
                <h2
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                  className="text-lg font-sans font-medium text-secondary uppercase"
                >
                  Our Mission
                </h2>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Grow business with Celebration.
                </h2>
                <p className="mt-4 text-xl leading-relaxed text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem quam voluptate iure non quidem! Sed quidem, et minima
                  debitis aliquid inventore obcaecati adipisci a dignissimos?
                  Est ad aspernatur vel expedita!
                </p>
              </div>

              <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                  <img
                    className="ml-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                    alt=""
                  />

                  <div className="absolute -bottom-10 -left-16">
                    <div className="bg-yellow-300">
                      <div className="px-8 py-10">
                        <span className="block text-4xl font-bold text-black lg:text-5xl">
                          {" "}
                          53%{" "}
                        </span>
                        <span className="block mt-2 text-base leading-tight text-black">
                          {" "}
                          High Conversions
                          <br />
                          Everything{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
