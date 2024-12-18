import Link from 'next/link';

const FindConstructionTeam = () => {
  return (
    <section className="h-[60vh] my-20 findConstructionTeam-bg">
      <div className="w-full h-full flex flex-col gap-y-7 items-center justify-center backdrop-brightness-[.3]">
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <h1 className="text-white lg:text-5xl text-3xl text-center">
            Find Construction Team
          </h1>
          <p className="lg:text-lg text-md text-white text-center w-[70%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            sequi quod tempore totam magni ex consequatur ad ipsam.
          </p>
        </div>
        <Link href={'/contactUs'}>
          <button className="btn-primary px-12 md:px-[30px] lg:px-[35px]">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FindConstructionTeam;
