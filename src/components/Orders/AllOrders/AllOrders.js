import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import firebaseInit from '../../../Firebase/firebase.init';
import useAuth from '../../../hooks/useAuth';

firebaseInit()

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    console.log(allOrders);
    const [control, setControl] = useState(false)
    const { user } = useAuth()
    useEffect(() => {
        fetch("https://gentle-savannah-57371.herokuapp.com/placeOrder")
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, [control]);
    // console.log(allOrders[1]?._id);
    const projectDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const uri = `https://gentle-savannah-57371.herokuapp.com/placeOrder/${id}`
            // console.log(uri);
            fetch(uri, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then(response => response.json())
                .then(data => {
                    if (data?.deletedCount) {
                        setControl(!control);
                    } else {
                        setControl(false);
                    }
                    window.location.reload()
                })
        }
    }
    const [admin, setAdmin] = useState()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setAdmin(data.password)
        console.log(admin);
        reset()
    }
    return (
        <div>
            {
                user.displayName && <div>
                    <p className='mt-5'>To get access of admin please provide the password:</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("password")} />
                        <input type="submit" />
                    </form>
                    <h1 className='mt-5'>All Orders</h1>
                    <table class="table container w-50">
                        <thead>
                            <tr>
                                <th scope="col">SL no.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {allOrders?.map((pd, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.email}</td>
                                    {
                                        admin === 'admin123' && 
                                            <td className="my-2 btn-sm btn-outline-danger">{pd?.status}</td>
                                    }
                                    {
                                        admin === 'admin123' && <div>
                                            <button onClick={() => projectDelete(allOrders[index]?._id)} className="p-2 btn bg-danger">Delete</button>
                                        </div>
                                    }
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            }
        </div>
    );
};

export default AllOrders;