import React from 'react';
import buy from '../assets/images/buy.png';
import cards from '../assets/images/cards.png';
import button from '../assets/images/button.png';

const Connects = () => {
  return (
    <section className="py-[50px] md:py-[100px] px-[20px] bg-[#f1f4f9] text-center">
      <article className="mb-[20px]">
        <h1 className="text-3xl md:text-4xl font-light mb-[25px]">PayPal connects buyers and sellers.</h1>
        <h5 className="text-custom-grey font-semibold">For buyers</h5>
      </article>

      <div className="steps flex flex-col gap-[20px] md:justify-between md:flex-row px-[100px]">
        <div className="step flex flex-col gap-[20px] justify-center mx-auto items-start pb-[20px] border-b md:border-none border-gray-300">
          <img src={buy} alt="Sign up" className="mx-auto w-[250px] md:w-[200px]" />
          <div className="text-content flex gap-[15px] md:gap-[10px] items-center">
            <div className="p-[15px] px-[25px] md:py-[10px] md:px-[20px] border border-gray-400 rounded-full ">
              <span className="font-bold text-lg">1</span>
            </div>
            <p className="text-[13px] text-gray-700 font-medium">
              Sign up with just an email address and password
            </p>
          </div>
        </div>

        <div className="step flex flex-col gap-[20px] justify-center w-[90%] md:w-auto mx-auto items-start pb-[20px] border-b md:border-none border-gray-300">
          <img src={cards} alt="Add cards" className="mx-auto w-[250px] md:w-[200px]" />
          <div className="text-content flex gap-[15px] md:gap-[10px] items-center">
            <div className="p-[15px] px-[25px] md:py-[10px] md:px-[20px] border border-gray-400 rounded-full ">
              <span className="font-bold text-lg">2</span>
            </div>
            <p className="text-[13px] text-gray-700 font-medium">Securely add your cards.</p>
          </div>
        </div>

        <div className="step flex flex-col gap-[20px] justify-center mx-auto items-start pb-[20px]">
          <img src={button} alt="Checkout" className="mx-auto w-[250px] md:w-[200px]" />
          <div className="text-content flex gap-[15px] md:gap-[10px] items-center">
            <div className="p-[15px] px-[25px] md:py-[10px] md:px-[20px] border border-gray-400 rounded-full ">
              <span className="font-bold text-lg">3</span>
            </div>
            <p className="text-[13px] text-gray-700 font-medium">
              Use the PayPal button to check out with just an email address and password.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connects;

