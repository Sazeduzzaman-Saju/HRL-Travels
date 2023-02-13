import React from 'react';
import ComingSoon from '../../comps/ComingSoon/ComingSoon';
import UseWebTitle from '../../hooks/UseWebTitle/UseWebTitle';

const Flight = () => {
    UseWebTitle('Flight Booking Page')
    return (
        <div>
            <ComingSoon>Flight</ComingSoon>
        </div>
    );
};

export default Flight;