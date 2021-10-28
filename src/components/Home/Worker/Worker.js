import React from 'react';
import worker from '../../../Images/worker.jpg'

const Worker = () => {
    return (
        <div className='container w-50 mx-auto my-5'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={worker} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body font-monospace p-5">
                            <h5 className="card-title pt-5">Do you want to join with us?</h5>
                            <p className="card-text text-center">Please call at +099-71243</p>
                            <p className="card-text text-center">or</p>
                            <p className="card-text text-center">email us at delivery@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Worker;