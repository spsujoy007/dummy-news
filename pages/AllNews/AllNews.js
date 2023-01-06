import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Newscard from './newscard';

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
        <div className='lg:mx-0 mx-3'>
            <h2 className='text-4xl uppercase font-semibold'>Total news: <span className='text-primary'>{allnews.length}</span></h2>
            <div className='mt-10'>
            {
                allnews.map(news => <div 
                key={news._id}
                className='mb-10 border-b-4 border-primary p-5 shadow-lg shadow-indigo-500/50'
                >
                    <div className='py-2'>
                        <h2 className='text-3xl uppercase text-left'>{news.title}</h2>
                        <h5 className='text-lg text-justify'>{news.shortdes}</h5>
                    </div>
                    <Image width='600' height='400' src={news.image}></Image>
                    <p className='text-xl my-3 text-justify'>{news.description}</p>
                    
                </div>
            )
            }
            </div>
        </div>
    );
};

export default AllNews;