import React from 'react';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';

const AboutDetails = () => {
    return (
        <div className='mb-24 mt-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-2 gap-10 justify-between items-center'>
                    <div>
                        <h1 className='text-3xl'>We Are The World Best Travel Agency Company Since 2000</h1>
                        <p className='text-md text-justify pt-10'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr

                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>

                        <div className="pt-10">
                            <PrimaryButton >Explore More</PrimaryButton>
                        </div>
                    </div>
                    <div>
                        <img src="https://andtour-vue.netlify.app/img/abour_right.177c8485.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDetails;