import React from 'react';

const SideBanner = () => {
    return (
        <div className='bg-base-50 mb-10'>
           <div className="carousel md:w-[300px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/tmZpSdL/Pay-Pal-enables-transfer-of-digital-currencies-to-external-wallets.png"  className="md:w-[300px] h-[250]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/hLcp08M/0-ZLBu2-Fl-BZJKPAi-Aw.png" className="md:w-[300px] h-[250]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/j4QN9Y7/Tax-implications-of-cryptocurrency-transactions.png" className="md:w-[300px] h-[250]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<p className='md:w-[300px] mt-3'>
Today, the entire globe is online; hence news cannot be left behind. Internet news portals currently serve an important role in teaching and enlightening people regarding current events throughout the world. In summary, the job of an online news portal is critical in today’s fast-paced world, where nobody has sufficient opportunity to rest in front of the screen to keep up with what's going on across the world.
</p>
        </div>
    );
};

export default SideBanner;