import React from "react";
import styled from 'styled-components'

const StyledSummary = styled.div`
letter-spacing: 3px;
color: #feda4a;
font-family: 'Pathway Gothic One', sans-serif;
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