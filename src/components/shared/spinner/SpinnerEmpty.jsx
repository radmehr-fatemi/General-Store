import React from 'react';
import { Link } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

const SpinnerEmpty = () => {
    return (
        <div className='w-full flex flex-col items-center justify-start pt-6 animate-Show'  >
            <h1 className='text-white mb-4' >Your shopping cart is empty</h1>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
            <Link className='text-green-100 border px-2 rounded-md mt-6' to="/" >Go to store</Link>
        </div>
    );
};

export default SpinnerEmpty;