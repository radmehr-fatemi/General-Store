import React from 'react';
import { MutatingDots, Puff } from 'react-loader-spinner';

const SpinnerHome = () => {
    return (
        <div className='w-full flex justify-center pt-6' style={{ height: "84vh" }}  >
            <Puff
                height="220"
                width="220"
                radius={1}
                color="#baeeff"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default SpinnerHome;