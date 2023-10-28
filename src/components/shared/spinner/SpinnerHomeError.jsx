import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const SpinnerError = () => {
    return (
        <div className='w-full flex flex-col items-center justify-start pt-6' style={{ height: "84vh" }}  >
            <h1 className='text-red-400 mb-4' >Sorry there is a problem</h1>
            <CirclesWithBar
                height="200"
                width="200"
                color="red"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />

            <button className='text-white px-4 py1 border rounded-md mt-4' onClick={ () => window.location.reload() } >Try again</button>
        </div>
    );
};

export default SpinnerError;