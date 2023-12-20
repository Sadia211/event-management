import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Navbar from '../../Shared/Navbar/Navbar';
import Services from '../Services/Services';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Feedback from '../../Shared/Feedback/Feedback';

const Home = () => {
    const  events=useLoaderData();
    const reviews=useLoaderData();
    return (
        <div className='bg-white'>
            
           <Navbar></Navbar>
            <Banner></Banner>
            <div>
                <h2 className='text-black text-3xl font-serif py-20 text-center'> Our Services</h2>
            </div>
            <div className='grid grid-cols-3 gap-2'>
            {events.map(eventss=><Services
    key={eventss.id}
    events={eventss}
    ></Services>)}
        </div>
        <div>
        </div>

        <Footer></Footer></div>
    );
};

export default Home;