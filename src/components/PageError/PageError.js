import React from 'react';
import error from '../../Images/error.jpg'

const PageError = () => {
    return (
        <div className="card mb-3 w-50 mx-auto mt-5 ">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={error} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mt-5"><div className="alert alert-danger d-flex align-items-center" role="alert">
                            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use href="#exclamation-triangle-fill" /></svg>
                            <h3 className="my-3">
                                404! Page Error
                            </h3>
                        </div></h5>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageError;