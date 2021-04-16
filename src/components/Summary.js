import React from "react";
import styled from 'styled-components'

const StyledSummary = styled.div`
letter-spacing: 0.5px;
color: white;
font-family: 'Pathway Gothic One', sans-serif;
font-weight: bold;
background-color:orange;
`

const Summary = props => {
    const { summary } = props
    return (
        <StyledSummary class="text">
            {summary}
        </StyledSummary>
    )
}

export default Summary;