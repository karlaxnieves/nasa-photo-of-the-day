import React from "react";

const Image = props => { //Img = the props function, which is an object destructuring
    const { image } = props
    return (
        <img
            alt='APOD'
            className='galaxy'
            src={image}
        />


    )
}

export default Image;