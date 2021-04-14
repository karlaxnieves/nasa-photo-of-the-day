import React from "react";

const Summary = props => {
    const { summary } = props
    return (
        <div class="text">
            {summary}
        </div>
    )
}

export default Summary;