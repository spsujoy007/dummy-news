import Image from 'next/image';
import React from 'react';
import downarrow from '../assets/down arrow.png'

const NewsBanner = () => {
    return (
        <div>
            <div className="hero " style={{ backgroundImage: `url("https://i.ibb.co/L1gCnLr/collection-newspapers.webp")` }}>
  <div className="hero-overlay bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content py-20 left-5">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold uppercase">Welcome to <br /><span className='text-black '>dummy news</span></h1>
      <p className="mb-5">Newspaper is a printed media and one of the oldest forms of mass communication in the world. <br /> Newspaper publications are frequency-based like daily, weekly, fortnightly.</p>
      {/* <button className="btn bg-base-100 text-primary border-0">More details</button> */}
      {/* <div className='flex justify-center mt-14 leftArrow'>
      <a href="#allnews">
            <Image src={downarrow} width="50" height={50}></Image>
      </a>
        </div> */}
    </div>


  </div>
</div>
        </div>
    );
};

export default NewsBanner;