import React from 'react';
import ComingSoon from '../../comps/ComingSoon/ComingSoon';
import UseWebTitle from '../../hooks/UseWebTitle/UseWebTitle';

const Tours = () => {
    UseWebTitle("Tours Booking Page")
    return (
        <div>
            <ComingSoon>Tours</ComingSoon>
        </div>
    );
};

export default Tours;