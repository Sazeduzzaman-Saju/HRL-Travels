import React, { useEffect } from 'react';
import { BiChair } from "react-icons/bi";
import { BsCalendarDay } from "react-icons/bs";
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';
import './Booking.css'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import ToursBooking from '../../../comps/Bookings/ToursBooking/ToursBooking';
import HotelsBooking from '../../../comps/Bookings/HotelsBooking/HotelsBooking';
import { GiAirplaneArrival, GiCommercialAirplane } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import Datepicker from "flowbite-datepicker/Datepicker";

const Booking = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleFlightBooking = (data) => {
        const from = data.from;
        const to = data.to;
        const date = data.date;
        const person = data.person;

        const flightBooking = {
            FlightBookingFrom: from,
            to: to,
            date: date,
            person: person
        }
        console.log(flightBooking)
        toast.success('Flight Booking SuccessFully Done')
        reset()
    }


    useEffect(() => {
        const datepickerEl = document?.getElementById("datepickerId");
        // console.log(datepickerEl);
        new Datepicker(datepickerEl, {});
    }, []);
    return (
        <section>
            <div className='booking_form max-w-6xl mx-auto shadow-xl py-10 mb-20 mt-20 rounded-2xl'>
                <div class="mb-4 border-b border-gray-200 dark:border-gray-700 ">
                    <ul class="flex flex-wrap -mb-px  font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li class="mr-2" role="presentation">
                            <button class="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Flight</button>
                        </li>
                        <li class="mr-2" role="presentation">
                            <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Tours</button>
                        </li>
                        <li class="mr-2" role="presentation">
                            <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Hotels</button>
                        </li>
                    </ul>
                </div>
                <div id="myTabContent">
                    <div class="p-4 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        {/* Flight */}
                        <form onSubmit={handleSubmit(handleFlightBooking)}>
                            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                                    <div class="mb-6">
                                        <label class=" text-lg mb-2 flex justify-between font-medium text-black-700 dark:text-black-500"><span>From</span> <span><GiCommercialAirplane></GiCommercialAirplane></span></label>

                                        <select {...register("from", {
                                            required: 'Form Where is Required'
                                        })}
                                            className="bg-black-50 border border-black-500 text-black-900 dark:text-black-400 placeholder-black-700 dark:placeholder-black-500  rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-700 dark:border-black-500" placeholder="New York" id="cars" name="cars">
                                            <option value="dhaka">Dhaka</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="lahor">Lahor</option>
                                            <option value="CTG">CTG</option>
                                            <option value="khulna">Khulna</option>
                                            <option value="gazipur">Gazipur</option>
                                        </select>

                                        {errors.from && <p className='text-red-500 mb-5'>{errors.from?.message}</p>}

                                        <p class="mt-2 flex justify-start items-center  text-black-600 dark:text-black-500"><GoLocation className='text-2xl mr-3'></GoLocation> JFK - John F. Kennedy International</p>
                                    </div>
                                    <div class="mb-6">
                                        <label for="success" class="flex justify-between  mb-2  font-medium text-black-700 dark:text-black-500"><span>To</span> <span className='text-2xl'><GiAirplaneArrival></GiAirplaneArrival></span></label>
                                        <select {...register("to", {
                                            required: 'To Where is Required'
                                        })}
                                            className="bg-black-50 border border-black-500 text-black-900 dark:text-black-400 placeholder-black-700 dark:placeholder-black-500  rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-gray-700 dark:border-black-500" placeholder="New York" id="cars" name="cars">
                                            <option value="alaska">Alaska</option>
                                            <option value="canada">Canada</option>
                                            <option value="iran">Iran</option>
                                            <option value="uSA">USA</option>
                                            <option value="bangladesh">Bangladesh</option>
                                            <option value="india">India</option>
                                            <option value="china">China</option>
                                        </select>

                                        {errors.to && <p className='text-red-500 mb-5'>{errors.to?.message}</p>}
                                        <p class="mt-2 flex justify-start items-center  text-black-600 dark:text-black-500"><GoLocation className='text-2xl mr-3'></GoLocation> LCY, London city airport</p>
                                    </div>
                                </div>
                                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                                    <div class="mb-6">
                                        <label for="success" class="block text-lg mb-2  font-medium text-black-700 dark:text-black-500">Journey date</label>
                                        <div className="relative w-72">
                                            <input
                                                {...register("date", {
                                                    required: 'Date is Required'
                                                })}
                                                datepicker
                                                datepicker-autohide
                                                type=""
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Select date"


                                                id="datepickerId"
                                            />
                                            <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                                                <svg
                                                    aria-hidden="true"
                                                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {errors.date && <p className='text-red-500 mb-5'>{errors.date?.message}</p>}


























                                        <p class="mt-2 flex justify-start items-center  text-black-600  dark:text-black-500"><BsCalendarDay className='text-2xl mr-3'></BsCalendarDay> Thursday</p>
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

                                        <p class="mt-2 flex justify-start items-center  text-black-600 dark:text-black-500"><BiChair className='text-2xl mr-3'></BiChair> Business</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button type='submit' className='button-86'>Submit</button>
                            </div>
                        </form>
                        {/* Flight End */}
                    </div>
                    <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        {/* Tours */}
                        <ToursBooking></ToursBooking>
                        {/* Tours End  */}
                    </div>
                    <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                        {/* Hotels */}
                        <HotelsBooking></HotelsBooking>
                        {/* Hotels End  */}
                    </div>
                </div>
            </div>
            <div className='mt-16 mb-16 max-w-7xl mx-auto'>
                <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-5 justify-between items-center'>
                    <div>
                        <h1 className='booking_title text-4xl capitalize font-normal border-b-2 pb-3'>Go beyond your imagination</h1>
                        <p className='text-lg capitalize mb-5'>Discover your ideal experience with us</p>
                        <PrimaryButton className="">Explore More</PrimaryButton>
                    </div>
                    <div>
                        <div>
                            <div class="box2 rounded-2xl">
                                <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80" alt='' />
                                <div class="box2-content">
                                    <div class="content">
                                        <h3 class="title">Sylet</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div class="box2 rounded-2xl ">
                                <img src="https://images.unsplash.com/photo-1674763766953-e5958c511536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt='' />
                                <div class="box2-content">
                                    <div class="content">
                                        <h3 class="title">Sundarban</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div class="box2 rounded-2xl">
                                <img src="https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80" alt='' />
                                <div class="box2-content">
                                    <div class="content">
                                        <h3 class="title">Sainmertin</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;