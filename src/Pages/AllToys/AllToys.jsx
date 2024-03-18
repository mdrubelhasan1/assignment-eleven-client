import { useEffect, useState } from "react";
import Toy from "./Toy";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    // console.log(toys);

    useEffect(() => {
        fetch('http://localhost:5000/toyCollection')
            .then(res => res.json())
            .then(data => setToys(data))
    })


    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg">
            {
                toys.map(toy => <Toy
                    key={toy._id}
                    toy={toy}
                ></Toy>)
            }
        </div>
    );
};

export default AllToys;