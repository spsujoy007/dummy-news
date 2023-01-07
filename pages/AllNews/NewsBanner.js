import React from 'react';

const NewsBanner = () => {
    return (
        <div className='pt-16'>
            <div className="hero " style={{ backgroundImage: `url("https://i.ibb.co/L1gCnLr/collection-newspapers.webp")` }}>
  <div className="hero-overlay bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content py-20 left-5">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold uppercase">Welcome to <br /><span className='text-black '>dummy news</span></h1>
      <p className="mb-5">Newspaper is a printed media and one of the oldest forms of mass communication in the world. <br /> Newspaper publications are frequency-based like daily, weekly, fortnightly.</p>
    </div>


  </div>
</div>
        </div>
    );
};

export default NewsBanner;