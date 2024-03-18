import React from 'react';

const Toy = ({toy}) => {
    const{ name, image_url } = toy;
    // console.log(toy)
    
    return (
        <div>
            <div className='bg-slate-200 p-4 rounded-lg'>
            <img className='rounded-lg' src={image_url} alt="" />
            <h3>Toy Name:{name} </h3>
            </div>
            
        </div>
    )
};

export default Toy;