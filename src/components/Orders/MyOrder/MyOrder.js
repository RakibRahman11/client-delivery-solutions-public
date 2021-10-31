import React, { useEffect, useState } from 'react';
import firebaseInit from '../../../Firebase/firebase.init';
import useAuth from '../../../hooks/useAuth';
import PlacedOrder from '../PlacedOrder/PlacedOrder';

firebaseInit()

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://gentle-savannah-57371.herokuapp.com/placeOrder')
            .then(response => response.json())
            .then(data => setMyOrder(data))
        // console.log(myOrder);
    }, [])
    const product = myOrder?.filter(item => item.email === user.email)
    // console.log(product);
    return (
        <div>
            {
                user.displayName && <div className='mt-5 bg-color'>
                {
                    product[0] ? <h1 className='my-5'>Thank you for the orders <i className="far fa-smile-beam"></i></h1> : <h1 className='my-5'>You don't have any pending order <i class="far fa-frown"></i></h1>
                }
                <div className="container">
                    <div className="row">
                        {
                            product.map(orders => <PlacedOrder orders={orders}></PlacedOrder>)
                        }
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default MyOrder;