import React from "react";
import styled from 'styled-components'

const StyledImg = styled.img`
width: 50%;
  border-radius: 20px;
  border: 15px inset #A0A0A0;.
  transform: skewX(35deg);
  transform: skewY(10deg);
  transform: skew(35deg, 10deg);
  transition: transform 1s;
  }

  &:hover{
    transform: skewX(-20px);
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