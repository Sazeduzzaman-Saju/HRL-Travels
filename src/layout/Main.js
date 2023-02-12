import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Footer/Footer';
import Header from '../page/Header/Header';
import { PuffLoader } from 'react-spinners';

const Main = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 3000)
    }, [])
    return (
        <div>
            {
                loading ?
                    <div className=''>
                        <div className='row'>
                            <div className='flex justify-center items-center' style={{ height: '100vh' }}>
                                <PuffLoader color={'#4568dc'} loading={loading} size={150} />
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <Header></Header>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </>}
        </div>
    );
};

export default Main;