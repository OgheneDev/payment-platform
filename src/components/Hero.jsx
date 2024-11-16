import React from 'react'

const Hero = () => {
  return (
    <section className="hero bg-[url('/src/assets/images/hero.jpg')] bg-cover bg-no-repeat pt-[50px] md:pt-[150px] pb-[30px] md:pb-[40px] px-[20px] text-center">
      <h1 className="text-white text-3xl font-semibold md:font-light md:text-4xl mb-[25px] md:mb-[40px]">
        The simpler, safer way to pay online
      </h1>
      <button className="bg-custom-blue text-white w-full py-[10px] rounded-full mb-[20px] md:w-fit md:px-[150px] text-[13px] font-semibold transition duration-300 ease-in-out hover:bg-blue-800">
        Sign Up for Free
      </button>
      <p className="text-white">
        Own a business? <span className="font-bold hover:underline cursor-pointer">Open a Business account.</span>
      </p>
    </section>
  );
};

export default Hero;

