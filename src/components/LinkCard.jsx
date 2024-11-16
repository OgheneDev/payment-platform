import React, { useState, useRef, useEffect } from 'react';
import pay from '../assets/images/pay.png';
import paid from '../assets/images/paid.png';
import cards4 from '../assets/images/add.png';

const LinkCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardContainerRef = useRef(null);
  const totalCards = 3;

  const cardData = [
    {
      name: 'Pay Someone',
      description: 'Pay for things that you bought or a service that you received.',
      proceed: 'Send Payments',
      image: pay,
      backgroundColor: '#1040C1',
    },
    {
      name: 'Get Paid',
      description: 'Get paid for selling something or for the work you did.',
      proceed: 'Request Money',
      image: paid,
      backgroundColor: '#121661',
    },
    {
      name: 'Add a card to shop the world',
      description: 'Buy with confidence with your card info secure.',
      proceed: 'Add to your Wallet',
      image: cards4,
      backgroundColor: '#761AD3',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const container = cardContainerRef.current;
        const scrollPosition = container.scrollLeft;
        const cardWidth = container.offsetWidth;
        const currentIndex = Math.round(scrollPosition / cardWidth);
        setActiveIndex(currentIndex);
      }
    };

    const container = cardContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (window.innerWidth < 768) {
        const container = cardContainerRef.current;
        const nextIndex = (activeIndex + 1) % totalCards;
        const cardWidth = container.offsetWidth;
        container.scrollTo({
          left: cardWidth * nextIndex,
          behavior: 'smooth',
        });
        setActiveIndex(nextIndex);
      }
    }, 15000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <section className="bg-gray-100 py-[50px]">
      {/* Static Card */}
      <div className="card flex items-start gap-[15px] w-[90%] mx-auto mb-[30px] bg-white p-[20px] shadow-md rounded-md">
        {/* SVG Icon */}
        <svg
          className="w-[30px] h-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          fill="blue"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          data-ppui="true"
        >
          <path
            fillRule="evenodd"
            d="M2 5.997a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-12zm3 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2zm11.05 5.021c-.203.432-.767.475-1.105.138-.256-.257-.291-.653-.161-.99A3.24 3.24 0 0 0 15 11.997c0-.412-.076-.805-.216-1.168-.13-.338-.095-.734.161-.99.338-.337.902-.294 1.105.138.289.613.45 1.298.45 2.02a4.73 4.73 0 0 1-.45 2.021zm.997 1.299c-.205.326-.184.756.088 1.028.316.316.839.293 1.085-.08a7.714 7.714 0 0 0 1.28-4.268c0-1.577-.47-3.043-1.28-4.267-.246-.373-.769-.397-1.085-.08-.272.272-.293.702-.088 1.028.604.961.953 2.1.953 3.32a6.22 6.22 0 0 1-.953 3.319z"
            clipRule="evenodd"
            data-ppui="true"
          />
        </svg>

        {/* Text Content */}
        <article className="flex flex-col gap-[5px]">
          <h3 className="text-xl font-semibold">Link a card</h3>
          <p className="text-gray-600">Send payments in minutes.</p>
        </article>
      </div>

      {/* Card Slider */}
      <div
        className="card-slider flex overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none space-x-[30px] px-4 md:justify-between"
        ref={cardContainerRef}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-[90vw] md:w-[30%] p-4 rounded-md flex flex-col items-center text-white"
            style={{ backgroundColor: card.backgroundColor }}
          >
            <img src={card.image} alt={card.name} className="w-[50%] h-auto mb-4" />
            <h1 className="text-3xl mb-[20px]">{card.name}</h1>
            <p className="mb-[50px] text-[20px] text-center">{card.description}</p>
            <button className="bg-white border border-[#121661] text-[#121661] w-full py-[10px] rounded-full font-bold text-xl">
              {card.proceed}
            </button>
          </div>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="indicator-dots flex justify-center mt-4 md:hidden">
        {cardData.map((_, index) => (
          <span
            key={index}
            className={`dot h-[15px] w-[15px] mx-2 rounded-full cursor-pointer ${
              index === activeIndex
                ? 'bg-[#121661]'
                : 'bg-transparent border border-black'
            }`}
            onClick={() => {
              const container = cardContainerRef.current;
              const cardWidth = container.offsetWidth;
              container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth',
              });
              setActiveIndex(index);
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default LinkCard;



