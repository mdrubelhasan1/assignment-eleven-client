import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-96">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/4t3cK3y/istockphoto-1322274556-612x612.jpg" className="w-full h-96" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/FKZJ5p9/teddy-meadow-cute-teddy-bear.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/s9DcWjp/istockphoto-1017309510-612x612.jpg" className="w-full h-96" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/qyPmfPS/top-global-firms-approaching-indian-toy-makers-for-sourcing-goods-official.webp" className="w-full h-96" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;