import React from "react";
import styled from 'styled-components'

const StyledH1 = styled.h1`
  color: blue;
  transition: transform 1s;
  
  &:hover{
  transform: scale(1.5);
  }
  `


const Title = props => {
    const { title } = props
    return (
        <StyledH1>
            {title}
        </StyledH1>
    )
}

export default Title;