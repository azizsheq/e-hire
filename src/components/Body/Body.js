import './Body.css'
import Display from '../Display/Display'
import Cart from '../Cart/Cart'
import data from '../../data/mock-data.json'
import { useState } from 'react';

const Body = () => {
    // using useState to get data from the json file
    const [users, setUsers] = useState([data]);
    // console.log(data);

    const [cart, setCart] = useState([]);

    const handleAddedUsers = (user) => {
        // console.log("added", user);
        const newCart = [...cart, user];
        setCart(newCart);
    }

    return (
        <div>
            <div className="container">
            <h3 style={{textAlign: 'left'}}>({data.length}) Available Players </h3>
                <div className="row">
                    <div className="col-8">
                        {
                            data.map(usersData => <Display user={usersData} handleAddedUsers={handleAddedUsers} key={usersData.id}></Display>)
                        }
                    </div>
                    <div className="col-4">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;