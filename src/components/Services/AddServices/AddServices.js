import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import firebaseInit from '../../../Firebase/firebase.init';
// import useFirebase from '../../../hooks/useFirebase';

firebaseInit()

const AddServices = () => {
    // const {user} = useFirebase()
    const { register, handleSubmit, reset } = useForm();
    console.log(register);
    // console.log(register);
    // console.log(register);
    const [admin, setAdmin] = useState()

    const onSubmit = data => {
        console.log(data);
        if(data.password===""){
            axios.post('https://gentle-savannah-57371.herokuapp.com/addservices', data)
            .then(res => {
                if(res){
                    alert('sure to add?');
                reset();
                }
            })
        }
        setAdmin(data.password)
        reset()
    };
    return (
        <div>
            <p className='mt-5'>To get access of admin please provide the password:</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("password")} />
                <input type="submit" />
            </form>
            {
                admin === 'admin123' && <div className="m-auto mt-5 w-25">
                    <h1 className="mt-5 text-center">Please Add Events</h1>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("title", { required: true, maxLength: 20 })}
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
                                    {...register("price")}
                                    placeholder="Price"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("image")}
                                    placeholder="Image URL"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input type="submit" value="Add" className="mt-2 w-50 btn btn-outline-primary" />
                            </form>
                        </div>
                    </div>
                </div>
            }


        </div>
    );
};

export default AddServices;