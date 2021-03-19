import React from "react";
import styled from 'styled-components'

const StyledImg = styled.img`
width: 50%;
  border-radius: 20px;
  border: 15px inset ##fffff0;
  transition: 1s ease-in-out;
  }
  transition: 0.5s ease-in-out;
  &:hover{
    transform: scale(1.5)
  }
`

const Img = props => { //Img = the props function, which is an object destructuring
    const { image } = props
    return (
        <StyledImg
            alt='APOD'
            className='galaxy'
            src={image}
        />


    )
}

export default Img;