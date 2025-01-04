import Link from 'next/link';

const FindConstructionTeam = () => {
  return (
    <section className="lg:h-[60vh] h-[50vh] findConstructionTeam-bg">
      <div className="w-full h-full flex flex-col gap-y-7 items-center justify-center backdrop-brightness-[.3]">
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <h1 className="text-white lg:text-5xl text-3xl text-center">
            Partner with us for success
          </h1>
          <p className="lg:text-lg text-md text-white text-center lg:w-[60%] w-full">
            Whether you have inquiries, project proposals, or feedback, we
            welcome your engagement as a valued partner in achieving project
            success...
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
