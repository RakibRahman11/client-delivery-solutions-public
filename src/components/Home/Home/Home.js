import React from 'react';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Worker from '../Worker/Worker';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Clients></Clients>
         <Worker></Worker>
        </div>
    );
};

export default Home;