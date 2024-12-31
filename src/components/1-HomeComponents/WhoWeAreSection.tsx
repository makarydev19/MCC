import Image from 'next/image';
import Link from 'next/link';
import BoxReveal from '../ui/box-reveal';
import { BlurFade } from '../ui/blur-fade';

const WhoWeAreSection = () => {
  return (
    <section className="lg:px-32 md:px-20 px-5 py-10 pt-72 lg:py-10 lg:pt-28">
      <div className="lg:m-0">
        <BlurFade delay={0.2} inView>
          <h2 className="text-lg font-sans font-medium text-secondary uppercase">
            Who We Are
          </h2>
        </BlurFade>
        <div className="flex flex-wrap lg:w-full items-center">
          <div className="flex-grow lg:w-5/12 lg:mb-0 mb-10 ">
            <BlurFade delay={0.2 * 2} inView>
              <h1 className="text-4xl mt-4">
                For over 20 years, MCC has transformed visions and concepts into
                steel, masonry, and concrete realities.
              </h1>
            </BlurFade>
            <BlurFade delay={0.2 * 3} inView>
              <p className="mt-8 text-base rounded-2xl px-4 py-3">
                Our clients represent a broad spectrum of industries and
                business sectors, allowing us the opportunity to apply our
                extensive experiences, know-how, and passion for excellence to
                each specific project in order to successfully handle every
                challenge and special circumstance.
              </p>
            </BlurFade>
            <BlurFade delay={0.2 * 2} inView>
              <p className="mt-5 text-base rounded-2xl px-4 py-3">
                With a well-respected track record behind us, and a solid
                outlook ahead, we’ve learned that our collaborative experiences
                with a variety of projects creates exceptional solutions and
                results for our clients.
              </p>
            </BlurFade>
          </div>
          <div className="flex flex-grow lg:w-3/6 justify-end items-end lg:ml-10">
            <BoxReveal duration={0.5}>
              <div className="lg:mt-5 mr-3 overflow-hidden rounded-2xl lg:min-h-[60vh] lg:w-[20vw] h-[40vh] shadow-xl shadow-black">
                <Image
                  src={`/Porto-October/IMG_0044.JPG`}
                  alt=""
                  width={3000}
                  height={3000}
                  className="img scale-animation"
                  loading="eager"
                />
              </div>
            </BoxReveal>
            <div className="-mt-3">
              <BoxReveal duration={0.5}>
                <div className="mb-3 rounded-2xl overflow-hidden lg:min-h-[60vh] lg:w-[20vw] w-[45vw] h-[40vh] shadow-xl shadow-black">
                  <Image
                    src={`/Porto-October/IMG_20181016_161451.jpg`}
                    alt=""
                    width={1500}
                    height={1500}
                    className="scale-animation img"
                    loading="eager"
                  />
                </div>
              </BoxReveal>
              <div className="absolute bg-bgcolor size-10 rounded-full ml-8 -mt-5 opacity-90"></div>
            </div>
          </div>
          <Link href="/aboutUs" className="relative mx-auto mt-10">
            <button className="btn-primary px-12 md:px-[30px] lg:px-[35px]">
              Explore more
            </button>
          </Link>
        </div>
      </div>
      <hr className="bg-slate-700 w-[80%]" />
    </section>
  );
};

export default WhoWeAreSection;
