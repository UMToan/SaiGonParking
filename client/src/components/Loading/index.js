import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

function Loading() {
    return (
        <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#fe2c55"
            innerCircleColor="#fe2c55"
            middleCircleColor="#fe2c55"
        />
    );
}

export default Loading;
