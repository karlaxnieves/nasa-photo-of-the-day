import React from "react";
import styled from 'styled-components'

const StyledH1 = styled.h1`
  color: #7878D8;
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