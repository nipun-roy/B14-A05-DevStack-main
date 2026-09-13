import bannerImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-16 py-20">
      <div className="flex items-center justify-between gap-16">
        
        {/*  (Left Content) */}
        <div className="w-1/2">
          
          {/* (Title) */}
          <h1 className="text-5xl font-extrabold text-[#0f172a] leading-tight tracking-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* (Description) */}
          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          {/* (Action Buttons) */}
          <div className="mt-8 flex items-center gap-4 text-sm font-medium">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition cursor-pointer shadow-sm">
              Explore Technologies
            </button>
            <button className="border border-gray-200 bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition cursor-pointer">
              Learn More
            </button>
          </div>

        </div>

        {/* (Right 3D Image) */}
        <div className="w-1/2 flex justify-end">
          <img
            src={bannerImg}
            alt="Development Stack"
            className="w-[480px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
