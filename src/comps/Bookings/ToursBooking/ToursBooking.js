import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BsCalendarDay } from 'react-icons/bs';
import { GiOfficeChair } from 'react-icons/gi';
import './ToursBooking.css';


const ToursBooking = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleToursBooking = (data) => {
        const destination = data.destination;
        const returnDate = data.returnDate;
        const journeyDate = data.journeyDate;
        const person = data.person;

        const toursBooking = {
            TourDestination: destination,
            returnDate: returnDate,
            journeyDate: journeyDate,
            person: person
        }
        console.log(toursBooking)
        toast.success('Tours Booking SuccessFully Done')
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(handleToursBooking)}>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                        <div class="mb-6">
                            <label class="block text-lg mb-2  font-medium text-black-700 dark:text-black-500">Destination</label>

                            <input
                                {...register("destination", {
                                    required: 'Form Where is Required'
                                })}
                                className="bg-black-50 border border-black-500 text-black-900 dark:text-black-400 placeholder-black-700 dark:placeholder-black-500  rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-700 dark:border-black-500" placeholder="Where are you going?"
                            />
                            {errors.destination && <p className='text-red-500 mb-5'>{errors.destination?.message}</p>}

                            <p class="mt-2 flex justify-start items-center  text-black-600 dark:text-black-500">Where are you going?</p>
                        </div>
                        <div class="mb-6">
                            <label for="success" class="block text-lg mb-2  font-medium text-black-700 dark:text-black-500">Journey date</label>

                            <input
                                {...register("journeyDate", {
                                    required: 'Journey Date is Required'
                                })}
                                className="bg-black-50 border border-black-500 text-black-900 dark:text-black-400 placeholder-black-700 dark:placeholder-black-500  rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-700 dark:border-black-500" placeholder="10-02-2023"
                            />
                            {errors.journeyDate && <p className='text-red-500 mb-5'>{errors.journeyDate?.message}</p>}

                            <p class="mt-2 flex justify-start items-center  text-black-600 dark:text-black-500"><BsCalendarDay className='text-2xl mr-3'></BsCalendarDay> Day</p>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                        <div class="mb-6">
                            <label for="success" class="block text-lg mb-2  font-medium text-black-700 dark:text-black-500">Return date</label>

                            <input
                                {...register("returnDate", {
                                    required: 'Return Date is Required'
                                })}
                                className="bg-black-50 border border-black-500 text-black-900 dark:text-black-400 placeholder-black-700 dark:placeholder-black-500  rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-700 dark:border-black-500" placeholder="12-02-2023"
                            />
                            {errors.returnDate && <p className='text-red-500 mb-5'>{errors.returnDate?.message}</p>}

                            <p class="mt-2 flex justify-start items-center  text-black-600 dark:text-black-500"><BsCalendarDay className='text-2xl mr-3'></BsCalendarDay> Day</p>
                        </div>
                        <div class="mb-6">
                            <label for="success" class="block text-lg mb-2  font-medium text-black-700 dark:text-black-500">Passenger, Class</label>
                            <input
                                {...register("person", {
                                    required: 'Person is Required'
                                })}
                                className="bg-black-50 border border-black-500 text-black-900 dark:text-black-400 placeholder-black-700 dark:placeholder-black-500  rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-700 dark:border-black-500" placeholder="0 Passenge"
                            />
                            {errors.person && <p className='text-red-500 mb-5'>{errors.person?.message}</p>}

                            <p class="mt-2 flex justify-start items-center  text-black-600 dark:text-black-500"><GiOfficeChair className='text-2xl mr-3'></GiOfficeChair> Business</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='button-86'>Submit</button>
                </div>
            </form>
        </>
    );
};

export default ToursBooking;