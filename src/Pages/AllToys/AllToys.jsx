import { useEffect, useState } from "react";
import Toy from "./Toy";
import { getShoppingCart } from "../../utilities/fakedb";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    
    // console.log(toys);

    useEffect(() => {
        fetch('http://localhost:5000/toyCollection')
            .then(res => res.json())
            .then(data => setToys(data))
    })
    



   

   


    return (


        <div>
            <h3 className="text-center text-3xl">All Toys</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg">
            
            {
                toys.map(toy => <Toy
                    key={toy._id}
                    toy={toy}
                    
                ></Toy>)
            }
        </div>
        </div>

    );
};

export default AllToys;