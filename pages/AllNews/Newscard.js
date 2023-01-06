import React from 'react';

const Newscard = ({news}) => {

    const {title, description, image, shortDescription} = news;

    return (
        <div>
            <h2 className='text-3xl'>{title}</h2>
        </div>
    );
};

export default Newscard;