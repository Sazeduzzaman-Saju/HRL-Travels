import React from 'react';
import { Link } from 'react-router-dom';
import UseWebTitle from '../../hooks/UseWebTitle/UseWebTitle';
import './ErrorPage.css'

const ErrorPage = () => {
    UseWebTitle('Error Page')
    return (
        <div>
            <div class="bg-indigo-900 relative overflow-hidden h-screen">
                <img src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9" class="absolute h-full w-full object-cover" alt='' />
                <div class="inset-0 bg-black opacity-25 absolute">
                </div>
                <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                    <div class="w-full font-mono flex flex-col items-center relative z-10">
                        <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                            You are all alone here. <br /> Please Go Back
                        </h1>
                        <p class="font-extrabold text-8xl my-44 text-white animate-bounce text-center">
                            404 <br /> Not<br /> Found
                        </p>
                        <Link to={'/'} className='button-86'>Go Home</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;