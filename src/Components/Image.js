import React from "react";

const Img = props => { //Img = the props function, which is an object destructuring
    const { image } = props
    return (
        <img
            alt='APOD'
            className='idkyet'
            src={image}
        />
    )
}

export default Img;