import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Newscard from './newscard';
import SideBanner from './sideBanner';

const AllNews = () => {

    const [allnews, setAllNews] = useState([]);
    const [loading, setLoading] = useState(true)
    

    useEffect(()=> {
        fetch('news.json')
        .then(response => response.json())
        .then(data => {
            setAllNews(data)
            setLoading(false)
        })
    } , [])

    if(loading){
        return <h2 className='text-3xl text-center my-20'>Loading...</h2>
    }

    return (
        <div className='lg:mx-0 mx-3' id='allnews'>
            <h2 className='text-2xl uppercase font-bold mt-5 text-center mb-10 border-b-2 py-10 border-primary'>Total dummy news: <span className='text-primary'>{allnews.length}</span></h2>
            <div className='md:flex'>
            <div className='mt-10 flex-1'>
            {
                allnews.map(news => <div 
                key={news._id}
                className='mb-10 border-b-4 border-primary '
                >
                    <div className='py-2'>
                        <h2 className='text-3xl uppercase text-left font-bold'>{news.title}</h2>
                        <h5 className='text-lg text-justify py-2'>{news.shortdes}</h5>
                    </div>
                    <Image width='600' height='400' src={news.image}></Image>
                    <p className='text-xl my-3 text-justify leading-8 '>{news.description}</p>
                    
                </div>
            )
            }
            </div>

            <div>
                <SideBanner></SideBanner>
            </div>
            </div>
        </div>
    );
};

export default AllNews;