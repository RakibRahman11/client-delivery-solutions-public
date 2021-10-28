import React from 'react';
import client1 from '../../../Images/Clients/client1.jpg'
import client2 from '../../../Images/Clients/client2.jpg'
import client3 from '../../../Images/Clients/client3.jpg'

const Clients = () => {
    return (
        <div className="my-5">
            <h3 className="mt-5">Our honorable customers</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mt-2">  
            <div className="col">
                <div className="card h-100">
                    <img src={client1} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Mr. Iqbal Ahmed</h5>
                    <p className="card-text">I got fast delivery from delivery solutions. They are good in behaviour, management etc. The main point is to get the desired item too fast</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={client2} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Mrs. Selina Parvin</h5>
                    <p className="card-text">I got fast delivery from delivery solutions. They are good in behaviour, management etc. The main point is to get the desired item too fast</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={client3} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Sakib Shihab</h5>
                    <p className="card-text">I got fast delivery from delivery solutions. They are good in behaviour, management etc. The main point is to get the desired item too fast</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Clients;