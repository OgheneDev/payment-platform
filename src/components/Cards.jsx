import React from 'react'
import { EllipsisVertical } from 'lucide-react'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div className="py-[30px] md:w-[500px] md:h-[100vh]">
      <div className='p-[20px] rounded-[15px] bg-white w-[90%] mx-auto'>
      <div className="header flex justify-between mb-[20PX]">
        <h3 className='text-xl font-bold'>Cards</h3>
        <EllipsisVertical size={20} />
      </div>

      {/* Static Card */}
      <div className="card flex items-start gap-[15px] ">
        {/* SVG Icon */}
        <svg
          className="w-[40px] h-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          fill="gray"
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
        <article className="flex flex-col gap-[5px] font-semibold">
          <p className="">Shop and send payments more securely.</p>
          <p className="mb-[20px]">Link your credit card now.</p>
          
        </article>
      </div>
      <Link className='text-blue-500 font-bold text-[18px]'>Link Card</Link>

    </div>
    </div>
  )
}

export default Cards
