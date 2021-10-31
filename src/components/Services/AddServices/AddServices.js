import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import firebaseInit from '../../../Firebase/firebase.init';
// import useFirebase from '../../../hooks/useFirebase';

firebaseInit()

const AddServices = () => {
    // const {user} = useFirebase()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // data.email = user?.email;
        // console.log(data);
        axios.post('https://gentle-savannah-57371.herokuapp.com/addservices', data)
            .then(res => {
                alert('sure to add?');
                reset();
            })
    };
    return (
        <div>
            <h1 className="mt-5 text-center">Please Add Events</h1>
            <div className="w-25 m-auto mt-5">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("title")}
                                placeholder="Title"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("image", { required: true })}
                                placeholder="Image URL"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input type="submit" value="Add" className=" mt-2 w-50 btn btn-outline-primary" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServices;