import React from 'react';

const Subscribe = () => {
  return (
    <section className="w-full px-4 md:px-6 py-12">
      <div className="w-full max-w-7xl mx-auto bg-[#e5e5e5] rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-16 flex flex-col items-center text-center">
        
        {/* Title */}
        <p className="text-[#1e2342] text-2xl md:text-4xl font-black mb-4 uppercase tracking-tight">
          STAY UPDATE WITH US
        </p>

        {/* Subtitle - Changed text-white to a darker shade for readability on light gray */}
        <p className="text-[#1e2342]/70 text-sm md:text-lg font-medium max-w-2xl leading-relaxed">
          Subscribe to our community to get exclusive offers, contents and update.
        </p>

        {/* Input Group */}
        <div className="relative w-full max-w-2xl mt-8 md:mt-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-14 md:h-16 pl-6 pr-32 md:pl-8 md:pr-40 rounded-full text-[#1e2342] text-sm md:text-base focus:outline-none shadow-sm bg-white"
          />
          <button className="absolute right-1.5 top-1.5 bottom-1.5 px-5 md:px-10 bg-[#1e2342] hover:bg-[#2a315a] text-white text-xs md:text-sm font-bold rounded-full transition-all duration-300 active:scale-95">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
};

export default Subscribe;