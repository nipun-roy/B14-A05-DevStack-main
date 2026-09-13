import bannerImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* left text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0f172a] leading-tight tracking-tight">
            Build Your Ideal <br />
            <span className="text-brand-gradient">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium">
            <a
              href="#technologies"
              className="bg-brand-gradient text-white px-6 py-3 rounded-lg hover:opacity-95 transition cursor-pointer shadow-sm active:scale-95"
            >
              Explore Technologies
            </a>
            <button className="border border-gray-200 bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition cursor-pointer active:scale-95">
              Learn More
            </button>
          </div>
        </div>

        {/* right side graphic */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={bannerImg}
            alt="Development Stack"
            className="w-full max-w-sm sm:max-w-md lg:max-w-[480px] object-contain drop-shadow-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
