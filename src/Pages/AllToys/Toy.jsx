import React from 'react';

const Toy = (props) => {
    const{ name, image_url } = props.toy;
   

    
    // console.log(toy)
    
    return (
        <div>
            <div className='bg-slate-200 p-4 rounded-lg '>
            <img className='rounded-lg h-60' src={image_url} alt="" />
            <h3>Toy Name:{name} </h3>
            <button className="btn btn-block bg-amber-500 hover:bg-amber-400">Add to Cart</button>
            </div>
            
        </div>
    )
};

export default Toy;